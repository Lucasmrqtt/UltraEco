// import firebase from "firebase/app"
// import "firebase/firestore"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCvtexSdsHj1_0f0Wr0fEFeCS8PQruGOYw",
    authDomain: "ultraeco-7f8f9.firebaseapp.com",
    databaseURL: "https://ultraeco-7f8f9-default-rtdb.firebaseio.com",
    projectId: "ultraeco-7f8f9",
    storageBucket: "ultraeco-7f8f9.appspot.com",
    messagingSenderId: "662320537690",
    appId: "1:662320537690:web:40d4e0ff512fa1d91b3863"
  };

  // initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  export default db
  // export default db
  // const db = firebase.firestore();