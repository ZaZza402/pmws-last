// src/components/BookingForm.jsx
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { getDay, setHours, setMinutes, addMinutes, format } from 'date-fns';
import { it } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';

import { businessHours } from '../config/businessHours';

// ... (generateTimeSlots function remains the same) ...
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
  const [allPossibleSlots, setAllPossibleSlots] = useState([]); // Renamed for clarity
  const [bookingCounts, setBookingCounts] = useState({}); // NEW: State to hold counts
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true);
      setSelectedSlot(null);
      setBookingCounts({}); // Clear previous counts
      
      const allSlots = generateTimeSlots(selectedDate);
      setAllPossibleSlots(allSlots);

      const fetchBookedSlots = async (date) => {
        try {
          const response = await fetch(`/api/get-bookings?date=${format(date, 'yyyy-MM-dd')}`);
          if (!response.ok) throw new Error('Network response was not ok');
          const bookedSlotsData = await response.json(); // e.g., ['9:30', '11:00', '11:00']
          
          // CORRECTED: Smart counting that handles missing leading zeros
          const counts = bookedSlotsData.reduce((acc, slot) => {
            try {
              const [hour, minute] = slot.split(':');
              const paddedHour = hour.padStart(2, '0');
              const paddedMinute = minute.padStart(2, '0');
              const normalizedSlot = `${paddedHour}:${paddedMinute}`;
              acc[normalizedSlot] = (acc[normalizedSlot] || 0) + 1;
            } catch (e) { /* ignore malformed data */ }
            return acc;
          }, {});

          setBookingCounts(counts);

        } catch (err) {
          setError('Impossibile caricare gli slot. Riprova più tardi.');
        } finally {
          setIsLoading(false);
        }
      };

      fetchBookedSlots(selectedDate);
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
      const response = await fetch('/api/create-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: format(selectedDate, 'dd/MM/yyyy'), // Format that matches the sheet
          time: format(selectedSlot, 'HH:mm'),
          name: userDetails.name,
          email: userDetails.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

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
            {allPossibleSlots.length > 0 ? (
              allPossibleSlots.map((slot, index) => {
                const formattedSlot = format(slot, 'HH:mm');
                const count = bookingCounts[formattedSlot] || 0;
                const isFull = count >= 2;

                return (
                  <button
                    type="button"
                    key={index}
                    className={`slot-button ${isFull ? 'disabled' : ''} ${selectedSlot === slot ? 'selected' : ''}`}
                    onClick={() => !isFull && setSelectedSlot(slot)}
                    disabled={isFull}
                  >
                    {formattedSlot}
                  </button>
                );
              })
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