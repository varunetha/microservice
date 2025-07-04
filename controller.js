const { v4: uuidv4 } = require('uuid');
const bookings = require('../data/bookings.json');

exports.getAllBookings = (req, res) => {
  res.json(bookings);
};

exports.createBooking = (req, res) => {
  const newBooking = {
    id: uuidv4(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

exports.getBookingById = (req, res) => {
  const booking = bookings.find(b => b.id === req.params.id);
  booking
    ? res.json(booking)
    : res.status(404).json({ message: 'Booking not found' });
};

exports.deleteBooking = (req, res) => {
  const index = bookings.findIndex(b => b.id === req.params.id);
  if (index > -1) {
    bookings.splice(index, 1);
    res.json({ message: 'Booking deleted' });
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
};
