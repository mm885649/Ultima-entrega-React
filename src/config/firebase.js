
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { productos } from "../components/data/asyncMock";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhLCtV_6e_Wl0GWM5KP6ej_YIUMNox45k",
  authDomain: "deportem-28095.firebaseapp.com",
  projectId: "deportem-28095",
  storageBucket: "deportem-28095.appspot.com",
  messagingSenderId: "401068050814",
  appId: "1:401068050814:web:1d1211e592f78ba1ddcb2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//  productos.forEach((prod) => {
//     addDoc(collection(db,'productos'),prod)
//     .then((data) => console.log(`El producto ${data.id} se suboio correctamente`))
//     .catch((error) => console.log(error))
//  }) 