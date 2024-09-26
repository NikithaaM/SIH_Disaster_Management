const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5009;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/YourNeeds', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Define Schema
const yourNeedsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  identityProof: { type: String, required: true }, // Store file path
  comments: { type: String, required: true },
});

const YourNeeds = mongoose.model('YourNeeds', yourNeedsSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage: storage });

// Route to handle form submission
app.post('/submit-form', upload.single('identityProof'), (req, res) => {
  const { name, address, comments } = req.body;
  const identityProof = req.file ? req.file.filename : null; // Handle file upload

  const newNeed = new YourNeeds({
    name,
    address,
    identityProof,
    comments,
  });

  newNeed.save()
    .then(() => res.json({ success: true, message: 'Form submitted successfully' }))
    .catch((err) => {
      console.error('Error saving to database:', err.message);
      res.status(500).json({ success: false, message: err.message });
    });
});

// Route to fetch all needs
app.get('/api/yourneeds', async (req, res) => {
  try {
    const needs = await YourNeeds.find(); // Fetch all records from the 'yourneeds' collection
    res.json(needs); // Send the records as JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching needs from database', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
