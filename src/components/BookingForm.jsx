// src/components/BookingForm.jsx
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { getDay, setHours, setMinutes, addMinutes, format } from 'date-fns';
import { it } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';

import { businessHours } from '../config/businessHours';

// Funzione per generare gli slot, gestendo la pausa pranzo
const generateTimeSlots = (date) => {
  if (!date) return [];
  const dayOfWeek = getDay(date);
  const schedule = businessHours[dayOfWeek];
  if (!schedule) return [];

  const { open, close, breakStart, breakEnd } = schedule;
  const slots = [];

  const createSlotsInRange = (startHour, endHour) => {
    let currentTime = setHours(date, Math.floor(startHour));
    if (startHour % 1 !== 0) {
      currentTime = setMinutes(currentTime, 30);
    }
    const endTime = setHours(date, Math.floor(endHour));
    
    while (currentTime < endTime) {
      slots.push(currentTime);
      currentTime = addMinutes(currentTime, 30);
    }
  };

  createSlotsInRange(open, breakStart);
  createSlotsInRange(breakEnd, close);
  return slots;
};

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true);
      setSelectedSlot(null);
      
      const fetchBookedSlots = async (date) => {
        try {
          // --- NEXT STEP: API Call to your Serverless Function ---
          // This is where you will call your backend to get real data.
          // For now, we simulate the API response with mock data.
          // const response = await fetch(`/api/get-bookings?date=${format(date, 'yyyy-MM-dd')}`);
          // const bookedSlotsData = await response.json();
          
          console.log(`Simulating API call for bookings on ${format(date, 'yyyy-MM-dd')}`);
          await new Promise(resolve => setTimeout(resolve, 500)); 
          const mockBookedSlots = ['10:30', '11:00', '14:30', '14:30']; // Slot 14:30 is now full
          
          return mockBookedSlots;
        } catch (err) {
          setError('Impossibile caricare gli slot. Riprova più tardi.');
          return [];
        }
      };

      fetchBookedSlots(selectedDate).then(bookedSlotsData => {
        const allPossibleSlots = generateTimeSlots(selectedDate);
        const bookingCounts = bookedSlotsData.reduce((acc, slot) => {
          acc[slot] = (acc[slot] || 0) + 1;
          return acc;
        }, {});

        const filteredSlots = allPossibleSlots.filter(slot => {
          const formattedSlot = format(slot, 'HH:mm');
          return (bookingCounts[formattedSlot] || 0) < 2;
        });

        setAvailableSlots(filteredSlots);
        setIsLoading(false);
      });
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleInputChange = (e) => {
    setUserDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSlot || !userDetails.name || !userDetails.email) {
      setError('Per favore, compila tutti i campi.');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      // --- NEXT STEP: API Call to Create the Booking ---
      // This is where you'll send data to your Serverless Function
      // which will save to Google Sheets and send emails via Resend.
      // await fetch('/api/create-booking', {
      //   method: 'POST',
      //   body: JSON.stringify({ /* booking details */ }),
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Booking submitted (simulation):', { userDetails, selectedDate, selectedSlot });
      setIsBooked(true);
    } catch (err) {
      setError('Qualcosa è andato storto. La prenotazione non è riuscita.');
      setIsLoading(false);
    }
  };
  
  if (isBooked) {
    return (
      <div className="booking-confirmation">
        <h3>Grazie per la tua prenotazione!</h3>
        <p>Abbiamo inviato un'email di conferma a <strong>{userDetails.email}</strong>.</p>
        <p>Il tuo appuntamento è fissato per il <strong>{format(selectedDate, 'dd MMMM yyyy', { locale: it })}</strong> alle <strong>{format(selectedSlot, 'HH:mm')}</strong>.</p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleBookingSubmit}>
      <div className="form-step">
        <label>1. Scegli una data</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          filterDate={(date) => getDay(date) !== 0 && getDay(date) !== 6}
          minDate={new Date()}
          locale={it}
          dateFormat="d MMMM yyyy"
          placeholderText="Clicca per selezionare"
          inline
        />
      </div>

      {isLoading && <p>Caricamento disponibilità...</p>}
      {selectedDate && !isLoading && (
        <div className="form-step">
          <label>2. Scegli un orario</label>
          <div className="time-slots-grid">
            {availableSlots.length > 0 ? (
              availableSlots.map((slot, index) => (
                <button type="button" key={index} className={`slot-button ${selectedSlot === slot ? 'selected' : ''}`} onClick={() => setSelectedSlot(slot)}>
                  {format(slot, 'HH:mm')}
                </button>
              ))
            ) : <p>Nessun orario disponibile per questa data.</p>}
          </div>
        </div>
      )}
      
      {selectedSlot && (
         <div className="form-step user-details">
            <label htmlFor="name">3. Inserisci i tuoi dettagli</label>
            <input type="text" id="name" name="name" placeholder="Nome completo" required onChange={handleInputChange} />
            <input type="email" id="email" name="email" placeholder="La tua email" required onChange={handleInputChange} />
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Conferma...' : 'Conferma Appuntamento'}
            </button>
         </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default BookingForm;