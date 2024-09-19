const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/charity-donations', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define schema for personal details
const personalDetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  expiryDate: String
});

// Define schema for cart items
const cartItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

// Define schema for storing the full donation (combining personal and cart items)
const donationSchema = new mongoose.Schema({
  personalDetails: personalDetailsSchema,
  cartItems: [cartItemSchema]
});

// Create models
const Donation = mongoose.model('Donation', donationSchema);

// POST route to save personal details and cart items
app.post('/api/donate', async (req, res) => {
  const { personalDetails, cartItems } = req.body;

  const donation = new Donation({
    personalDetails,
    cartItems
  });

  try {
    await donation.save();
    res.status(201).send('Donation saved successfully');
  } catch (error) {
    res.status(500).send('Failed to save donation');
  }
});

// GET route to retrieve donations for the admin page
app.get('/api/donations', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).send('Failed to retrieve donations');
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
