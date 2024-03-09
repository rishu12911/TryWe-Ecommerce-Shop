// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzWzu0LGdPECLbVOP9wFYGqJTPXChPovs",
  authDomain: "ecommerce-web-7b42d.firebaseapp.com",
  projectId: "ecommerce-web-7b42d",
  storageBucket: "ecommerce-web-7b42d.appspot.com",
  messagingSenderId: "871340523863",
  appId: "1:871340523863:web:ef0da61e30139f6478fe12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app)

export {fireDB,auth}