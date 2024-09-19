// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDEwx9j5ZFUessbv9SwBAbXg1kYMtN4sDo",
  authDomain: "disaster-management-39b41.firebaseapp.com",
  projectId: "disaster-management-39b41",
  storageBucket: "disaster-management-39b41.appspot.com",
  messagingSenderId: "894762197024",
  appId: "1:894762197024:web:50ea0d58af110539a21c45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: "BJgbgtisRQOxV0yDCTaNqkEn6eixzAw1HUviFskSVQZ3wYgr3MYoFYss0UmTEMjDDPj0xb1rEu9nPR3itH23iOc",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("Current token for client: ", currentToken);
        return currentToken;
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
