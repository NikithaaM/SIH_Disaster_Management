const functions = require('firebase-functions');
const admin = require('firebase-admin');
const twilio = require('twilio');

admin.initializeApp();

// Twilio Credentials
const accountSid = 'ACc79366aaa5d9023eaea5a992b4b4c08e';
const authToken = '17ca78f058e5f6bbb1c597ac74060516';
const client = new twilio(accountSid, authToken);
const twilioNumber = '+14804854481';

exports.sendSmsNotification = functions.database.ref('/notifications/{pushId}')
  .onCreate((snapshot, context) => {
    const notificationData = snapshot.val();
    const disasterMessage = notificationData.message;

    // Replace this with your verified phone numbers from Twilio
    const recipientPhoneNumbers = ['+919865714222', '+0987654321']; 

    const smsPromises = recipientPhoneNumbers.map(number => {
      return client.messages.create({
        body: disasterMessage,
        from: twilioNumber,
        to: number,
      });
    });

    return Promise.all(smsPromises)
      .then(() => {
        console.log('SMS sent successfully!');
      })
      .catch(err => {
        console.error('Error sending SMS:', err);
      });
  });
