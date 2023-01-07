import { initializeApp } from "firebase/app";
import { getFirestore ,collection } from "@firebase/firestore";

   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUEscJrjeR8pmjcNIjQ5VtBSOJN-7Q1kg",
  authDomain: "messenger-clone-85729.firebaseapp.com",
  projectId: "messenger-clone-85729",
  storageBucket: "messenger-clone-85729.appspot.com",
  messagingSenderId: "769459626662",
  appId: "1:769459626662:web:4a57e8842ecb00e2d34a67",
  measurementId: "G-KFYBEWJRZ4",
  };
  const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
   export  const msgsCollectionRef =collection(db ,'messages');

    export default db;

 
