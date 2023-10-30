import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHHk-gOUf7gDqDsLFxO_5c0kJBjpGVCBQ",
  authDomain: "teampbbudgettracker.firebaseapp.com",
  projectId: "teampbbudgettracker",
  storageBucket: "teampbbudgettracker.appspot.com",
  messagingSenderId: "244991288006",
  appId: "1:244991288006:web:2388b031c1e06ee36eedc7"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }