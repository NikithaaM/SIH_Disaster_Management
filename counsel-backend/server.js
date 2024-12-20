const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/volunteerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Define the session schema
const sessionSchema = new mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: String,
    email: String,
    issue: String,
    status: { type: String, default: 'pending' },
    doctorName: { type: String, default: '' }
});

// Create the model
const Session = mongoose.model('Session', sessionSchema);

// Route to fetch all pending sessions
app.get('/api/sessions', async (req, res) => {
    try {
        const sessions = await Session.find({ status: 'pending' });
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sessions', error });
    }
});

app.post('/api/sessions', async (req, res) => {
    console.log('Received data:', req.body);
    const { name, address, phoneNumber, email, issue } = req.body;

    const newSession = new Session({
        name,
        address,
        phoneNumber,
        email,
        issue
    });

    try {
        const savedSession = await newSession.save();
        console.log('Session saved:', savedSession);
        res.status(201).json(savedSession);
    } catch (error) {
        console.error('Error saving session:', error);
        res.status(500).json({ message: 'Error creating session', error });
    }
});


// Route to create a new session
app.post('/api/sessions', async (req, res) => {
    const { name, address, phoneNumber, email, issue } = req.body;

    const newSession = new Session({
        name,
        address,
        phoneNumber,
        email,
        issue
    });

    try {
        const savedSession = await newSession.save();
        res.status(201).json(savedSession);
    } catch (error) {
        res.status(500).json({ message: 'Error creating session', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5060;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
