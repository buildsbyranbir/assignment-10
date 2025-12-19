// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBJnGIztVnwDYZ0dvX2PoscT97u88pUzo",
  authDomain: "home-nest-e972c.firebaseapp.com",
  projectId: "home-nest-e972c",
  storageBucket: "home-nest-e972c.firebasestorage.app",
  messagingSenderId: "34726747320",
  appId: "1:34726747320:web:cdf86beb7cc2958ba2684d",
  measurementId: "G-PXWX8EYXXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);