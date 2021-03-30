import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC93X_1Nw3RZv1GkymCULxvKz00KVA1KzI",
    authDomain: "e-commerce-2c178.firebaseapp.com",
    projectId: "e-commerce-2c178",
    storageBucket: "e-commerce-2c178.appspot.com",
    messagingSenderId: "191427667226",
    appId: "1:191427667226:web:4945aaaf5ee5d7abd7f8a3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };