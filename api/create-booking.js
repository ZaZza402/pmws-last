// api/create-booking.js
import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { date, time, name, email, service, note } = req.body; // <-- RECEIVE THE NEW NOTE FIELD

  if (!date || !time || !name || !email || !service) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // 1. Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });

    // --- NEW, ROBUST AVAILABILITY CHECK ---
    const getRange = 'Sheet1!A2:B';
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: getRange,
    });
    
    const allBookings = response.data.values || [];
    
    // Smart comparison logic that ignores leading zeros
    const bookingCount = allBookings.filter(row => {
      if (row[0] !== date) return false; // Check if dates match

      // Normalize both sheet time and client time for comparison
      try {
        const [sheetHour, sheetMinute] = row[1].split(':').map(Number);
        const [clientHour, clientMinute] = time.split(':').map(Number);
        return sheetHour === clientHour && sheetMinute === clientMinute;
      } catch (e) {
        // If there's an error parsing a row, ignore it
        return false;
      }
    }).length;

    if (bookingCount >= 2) {
      // If 2 or more bookings exist, the slot is full. Reject the new booking.
      return res.status(409).json({ message: 'This time slot is no longer available. Please choose another time.' });
    }
    // --- END OF NEW CHECK ---

    // --- Append booking to the Google Sheet (WITH NEW NOTE DATA) ---
    const appendRange = 'Sheet1!A:G'; // <-- EXTEND RANGE TO COLUMN G
    const newRow = [[date, time, name, email, new Date().toISOString(), service, note || '']]; // <-- ADD NOTE TO THE ROW
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: appendRange,
      valueInputOption: 'USER_ENTERED',
      resource: { values: newRow },
    });

    // --- Send confirmation emails (UPDATE NOTIFICATION EMAIL) ---
    // Email to the client (remains the same)
    await resend.emails.send({
      from: 'PuntoMigrare Conferme <prenotazioni@notifica.puntomigrare.it>',
      to: email,
      subject: 'Il tuo appuntamento con PuntoMigrare è confermato!',
      html: `<p>Ciao ${name}, il tuo appuntamento per il <strong>${date}</strong> alle ore <strong>${time}</strong> è confermato. Ti aspettiamo!</p>`,
    });

    // Email to the business (WITH NEW NOTE INFO)
    await resend.emails.send({
      from: 'PuntoMigrare Prenotazioni <prenotazioni@notifica.puntomigrare.it>',
      to: process.env.BUSINESS_EMAIL_ADDRESS,
      subject: `Nuovo appuntamento (${service}): ${name} - ${date} @ ${time}`,
      html: `
        <p>È stato fissato un nuovo appuntamento:</p>
        <ul>
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Data:</strong> ${date}</li>
          <li><strong>Ora:</strong> ${time}</li>
          <li><strong>Servizio Richiesto:</strong> ${service}</li>
          <li><strong>Note Aggiuntive:</strong> ${note || 'Nessuna'}</li>
        </ul>
      `,
    });

    return res.status(200).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error('Error in create-booking function:', error);
    return res.status(500).json({ message: 'An internal error occurred.' });
  }
}