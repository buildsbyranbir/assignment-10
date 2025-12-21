import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAtbixJKsGr0wzDvuMyF_6bhXj5CQVqJE",
  authDomain: "home-nest-project-bc7aa.firebaseapp.com",
  projectId: "home-nest-project-bc7aa",
  storageBucket: "home-nest-project-bc7aa.appspot.com",
  messagingSenderId: "29081505814",
  appId: "1:29081505814:web:3882a94175c502dd24e537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
