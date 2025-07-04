const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  createBooking,
  getBookingById,
  deleteBooking
} = require('../controllers/bookingController');

router.get('/', getAllBookings);
router.post('/', createBooking);
router.get('/:id', getBookingById);
router.delete('/:id', deleteBooking);

module.exports = router;
