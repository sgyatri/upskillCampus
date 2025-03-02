const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

// Sample Route
app.get('/', (req, res) => {
  res.send('Food Delivery API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const User = require('./models/User');
const Restaurant = require('./models/Restaurant');
const Order = require('./models/Order');

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);
