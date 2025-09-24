// src/config/businessHours.js
export const businessHours = {
  // 0: Domenica, 1: Lunedì, ..., 6: Sabato
  // I giorni con orario continuato hanno breakStart e breakEnd uguali
  1: { open: 9, close: 18, breakStart: 13, breakEnd: 14.5 }, // Lunedì (14.5 = 14:30)
  2: { open: 9, close: 18, breakStart: 13, breakEnd: 14.5 }, // Martedì
  3: { open: 9, close: 13, breakStart: 13, breakEnd: 13 },   // Mercoledì (senza pausa)
  4: { open: 9, close: 18, breakStart: 13, breakEnd: 14.5 }, // Giovedì
  5: { open: 9, close: 13, breakStart: 13, breakEnd: 13 },   // Venerdì (senza pausa)
  0: null, // Domenica (chiuso)
  6: null, // Sabato (chiuso)
};