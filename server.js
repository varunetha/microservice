const express = require('express');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookings');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Flight Booking Service running on port ${PORT}`);
});
