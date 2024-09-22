const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/donationsDB'; // Replace with your MongoDB URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Create Mongoose schema and model
const donationSchema = new mongoose.Schema({
  officerName: String,
  phoneNumber: String,
  location: String,
  products: [
    {
      productName: String,
      productQuantity: Number,
    },
  ],
});

const Donation = mongoose.model('Donation', donationSchema);

// API route to handle form submission
app.post('/api/update-donations', async (req, res) => {
  const { officerName, phoneNumber, location, products } = req.body;

  try {
    const newDonation = new Donation({
      officerName,
      phoneNumber,
      location,
      products,
    });

    await newDonation.save();

    res.status(201).json({ message: 'Donation updated successfully', donation: newDonation });
  } catch (error) {
    res.status(500).json({ message: 'Error updating donation', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
