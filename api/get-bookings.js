// api/get-bookings.js
import { google } from 'googleapis';
import { format } from 'date-fns';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { date } = req.query; // Expecting date in 'yyyy-MM-dd' format
  if (!date) {
    return res.status(400).json({ error: 'Date parameter is required' });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    // Assuming headers are in row 1, data starts from row 2.
    // Fetches Date in column A and Time in column B.
    const range = 'Sheet1!A2:B'; 

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });
    
    const allBookings = response.data.values || [];
    // Filter bookings for the requested date and return only the times
    const bookedSlots = allBookings
      .filter(row => row[0] === format(new Date(date), 'dd/MM/yyyy')) // row[0] is BookingDate, format must match sheet
      .map(row => row[1]); // row[1] is BookingTime

    return res.status(200).json(bookedSlots);

  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}