// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-_qNXu4u2i1E-o-OWZSwsd-WzG0ppZJ0",
  authDomain: "testsvelte-22efb.firebaseapp.com",
  projectId: "testsvelte-22efb",
  storageBucket: "testsvelte-22efb.appspot.com",
  messagingSenderId: "558563066697",
  appId: "1:558563066697:web:09caf6c66ea09cb5405098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;