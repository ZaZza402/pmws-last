// api/create-booking.js
import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { date, time, name, email } = req.body;

  if (!date || !time || !name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
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
    const range = 'Sheet1!A:E';

    // 2. Append booking to the Google Sheet
    const newRow = [[date, time, name, email, new Date().toISOString()]];
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: { values: newRow },
    });

    // 3. Send confirmation emails via Resend
    // Email to the client
    await resend.emails.send({
      from: 'PuntoMigrare Conferme <prenotazioni@notifica.puntomigrare.it>',
      to: email,
      subject: 'Il tuo appuntamento con PuntoMigrare è confermato!',
      html: `<p>Ciao ${name}, il tuo appuntamento per il <strong>${date}</strong> alle ore <strong>${time}</strong> è confermato. Ti aspettiamo!</p>`,
    });

    // Email to the business
    await resend.emails.send({
      from: 'PuntoMigrare Prenotazioni <prenotazioni@notifica.puntomigrare.it>',
      to: process.env.BUSINESS_EMAIL_ADDRESS,
      subject: `Nuovo appuntamento: ${name} - ${date} @ ${time}`,
      html: `<p>È stato fissato un nuovo appuntamento:</p><ul><li><strong>Nome:</strong> ${name}</li><li><strong>Email:</strong> ${email}</li><li><strong>Data:</strong> ${date}</li><li><strong>Ora:</strong> ${time}</li></ul>`,
    });

    return res.status(200).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error('Error in create-booking function:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}