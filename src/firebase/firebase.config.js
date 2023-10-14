// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBE2BAV0_xuDDFyBPKuzaZBD7qgy63Jq2o",
    authDomain: "buy-sale-mern.firebaseapp.com",
    projectId: "buy-sale-mern",
    storageBucket: "buy-sale-mern.appspot.com",
    messagingSenderId: "222902575953",
    appId: "1:222902575953:web:72afb6abf80ad75850a970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;