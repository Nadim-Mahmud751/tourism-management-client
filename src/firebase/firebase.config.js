import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FIREBASE_KEY,
    authDomain: "realestate-nadim.firebaseapp.com",
    projectId: "realestate-nadim",
    storageBucket: "realestate-nadim.appspot.com",
    messagingSenderId: "369488361770",
    appId: "1:369488361770:web:3232d072a4959d30480653",
    measurementId: "G-3053M6PZYN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
