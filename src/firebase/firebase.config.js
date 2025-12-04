import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4jlj3UCL6jeglqTzKA198jPWQM3CVpEM",
  authDomain: "warm-paws-652a6.firebaseapp.com",
  projectId: "warm-paws-652a6",
  storageBucket: "warm-paws-652a6.firebasestorage.app",
  messagingSenderId: "733321754092",
  appId: "1:733321754092:web:8538469cf6593e8b353cc9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
