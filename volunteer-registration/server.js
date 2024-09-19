const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Volunteer Schema
const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other', 'prefer_not_to_say'],
    required: true
  },
  availability: {
    type: String,
    enum: ['weekdays', 'weekends', 'both'],
    required: true
  },
  locationPreference: {
    type: String,
    enum: ['onsite', 'offsite'],
    required: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  district: {
    type: String,
    required: true,
    trim: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error setting up email transporter:', error);
  } else {
    console.log('Email transporter is ready.');
  }
});

// Route to register a new volunteer
app.post('/api/volunteers', async (req, res) => {
  const { name, email, phone, age, gender, availability, locationPreference, state, district } = req.body;

  // Basic validation (additional validation can be added as needed)
  if (!name || !email || !phone || !age || !gender || !availability || !locationPreference || !state || !district) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if the volunteer already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(409).json({ message: 'Volunteer with this email already exists.' });
    }

    // Create a new volunteer
    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      age,
      gender,
      availability,
      locationPreference,
      state,
      district
    });

    // Save to database
    await newVolunteer.save();

    // Send confirmation email to the volunteer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Volunteer Registration Confirmation',
      text: `Hello ${name},

Thank you for registering as a volunteer. We will contact you soon with more information.

Best regards,
[Your Organization Name]`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending confirmation email:', error);
        // Optionally, you can choose to delete the volunteer if email fails
        // return res.status(500).json({ message: 'Registration successful, but failed to send confirmation email.' });
      } else {
        console.log('Confirmation email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Volunteer registered successfully!' });
  } catch (error) {
    console.error('Error registering volunteer:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route to send message to all volunteers
app.post('/api/sendMessage', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message content is required.' });
  }

  try {
    // Find all volunteers in the database
    const volunteers = await Volunteer.find();
    const emails = volunteers.map(vol => vol.email);

    if (emails.length === 0) {
      return res.status(404).json({ message: 'No volunteers found.' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emails, // Send to all volunteers
      subject: 'Message from Admin',
      text: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending emails:', error);
        return res.status(500).json({ message: 'Error sending email', error });
      }
      res.status(200).json({ message: 'Message sent successfully!', info });
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route to get all volunteers for the frontend
app.get('/api/volunteers', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ registeredAt: -1 });
    res.status(200).json(volunteers);
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
