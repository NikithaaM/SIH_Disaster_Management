import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // or firestore depending on your choice

const firebaseConfig = {
  apiKey: "AIzaSyDEwx9j5ZFUessbv9SwBAbXg1kYMtN4sDo",
  authDomain: "disaster-management-39b41.firebaseapp.com",
  databaseURL: "https://<disaster-management-39b41>.firebaseio.com/",
  projectId: "disaster-management-39b41",
  storageBucket: "disaster-management-39b41.appspot.com",
  messagingSenderId: "894762197024",
  appId: "1:894762197024:web:50ea0d58af110539a21c45"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database(); // or firebase.firestore() for Firestore
