import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC8BCDzLeyR8NGM5TL2ISMNS_sM6NJAZs",
  authDomain: "clone-60d19.firebaseapp.com",
  projectId: "clone-60d19",
  storageBucket: "clone-60d19.appspot.com",
  messagingSenderId: "584742720745",
  appId: "1:584742720745:web:6f59c165c0b19ce894cc78",
  measurementId: "G-JYR0TMB1ZG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };