import './assets/css/style.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3kNw85lAG9m_GT3bxTHjv30c35cxRTH0",
  authDomain: "edgelinksupplierslimited.firebaseapp.com",
  projectId: "edgelinksupplierslimited",
  storageBucket: "edgelinksupplierslimited.firebasestorage.app",
  messagingSenderId: "237796989893",
  appId: "1:237796989893:web:ae5109759e8a5349c9c9ac",
  measurementId: "G-B048RLDXVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

require('./assets/js/scripts.min.js')

