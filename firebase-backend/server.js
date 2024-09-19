// server.js
const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const path = require("path");

// Load service account credentials from the JSON file
const serviceAccount = require(path.join(__dirname, "config/firebase-adminsdk.json"));

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define the /send-alert route
app.post("/send-alert", (req, res) => {
  const { disasterMessage, fcmToken } = req.body;

  // Construct the message to be sent
  const message = {
    notification: {
      title: "Disaster Alert",
      body: disasterMessage,
    },
    token: fcmToken, // Token identifying the device/user
  };

  // Send the notification
  admin.messaging()
    .send(message)
    .then((response) => {
      console.log("Successfully sent message:", response);
      res.send("Notification sent successfully");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      res.status(500).send("Error sending notification");
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
