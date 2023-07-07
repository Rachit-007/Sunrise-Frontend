// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7IYcVuNhWWPrNZ-c-DAhzk6aZyCWKYLI",
  authDomain: "commercetools-2.firebaseapp.com",
  projectId: "commercetools-2",
  storageBucket: "commercetools-2.appspot.com",
  messagingSenderId: "1056594653971",
  appId: "1:1056594653971:web:0a65276749623c232860e6",
  measurementId: "G-YPL53SH8YB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
