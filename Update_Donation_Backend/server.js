const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB connection string (replace with your MongoDB URI)
const MONGO_URI = 'mongodb://localhost:27017/donationsDB'; 

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Create Mongoose schema and model for donations
const donationSchema = new mongoose.Schema({
  officerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  location: { type: String, required: true },
  products: [
    {
      productName: { type: String, required: true },
      productQuantity: { type: Number, required: true },
    },
  ],
});

const Donation = mongoose.model('Donation', donationSchema);

// API route to handle form submission and update donations
app.post('/api/update-donations', async (req, res) => {
  const { officerName, phoneNumber, location, products } = req.body;

  try {
    const newDonation = new Donation({
      officerName,
      phoneNumber,
      location,
      products,
    });

    await newDonation.save(); // Save the new donation to MongoDB

    res.status(201).json({ message: 'Donation updated successfully', donation: newDonation });
  } catch (error) {
    console.error('Error updating donation:', error);
    res.status(500).json({ message: 'Error updating donation', error });
  }
});

// API route to accept a donation
app.post('/api/accept-donation/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const donation = await Donation.findById(id);
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    // Mark donation as accepted and save
    donation.accepted = true; // Optionally add this field to your schema if needed
    await donation.save();

    res.status(200).json({ message: 'Donation accepted', donation }); // Return the updated donation
  } catch (error) {
    console.error('Error accepting donation:', error);
    res.status(500).json({ message: 'Error accepting donation', error });
  }
});

// API route to get all donations
app.get('/api/donations', async (req, res) => {
  try {
    const donations = await Donation.find(); // Retrieve all donations from MongoDB
    res.status(200).json(donations);
  } catch (error) {
    console.error('Error retrieving donations:', error);
    res.status(500).json({ message: 'Error retrieving donations', error });
  }
});

// API route to delete a donation
app.delete('/api/donations/:id', async (req, res) => {
  const donationId = req.params.id;

  try {
    await Donation.findByIdAndDelete(donationId); // Delete the donation from MongoDB
    res.status(200).json({ message: 'Donation deleted successfully' });
  } catch (error) {
    console.error('Error deleting donation:', error);
    res.status(500).json({ message: 'Error deleting donation', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
