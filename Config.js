// import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCvtexSdsHj1_0f0Wr0fEFeCS8PQruGOYw",
  authDomain: "ultraeco-7f8f9.firebaseapp.com",
  databaseURL: "https://ultraeco-7f8f9-default-rtdb.firebaseio.com",
  projectId: "ultraeco-7f8f9",
  storageBucket: "ultraeco-7f8f9.appspot.com",
  messagingSenderId: "662320537690",
  appId: "1:662320537690:web:40d4e0ff512fa1d91b3863"
};

import firebase from "firebase" 
// import { initializeApp } from 'firebase/app'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
//import db from "../Config"
// import { firestore } from 'firebase';
// import { firebaseConfig } from '../Config';

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

// const firebaseConfig = {
//   apiKey: "AIzaSyAghc7xlxS3StzJfQsBtPkw_dhYExA8CwM",
//   authDomain: "e-library-8c68a.firebaseapp.com",
//   projectId: "e-library-8c68a",
//   storageBucket: "e-library-8c68a.appspot.com",
//   messagingSenderId: "444710135740",
//   appId: "1:444710135740:web:8dc2efc83ee28b64f12db9"
// };

// firebase.initializeApp(firebaseConfig)
// export default firebase.firestore()

// export const firebaseConfig = {
//   apiKey: "AIzaSyAghc7xlxS3StzJfQsBtPkw_dhYExA8CwM",
//   authDomain: "e-library-8c68a.firebaseapp.com",
//   projectId: "e-library-8c68a",
//   storageBucket: "e-library-8c68a.appspot.com",
//   messagingSenderId: "444710135740",
//   appId: "1:444710135740:web:8dc2efc83ee28b64f12db9"
// };