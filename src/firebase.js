import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgcQuAv4kW-iamF1_wDXxJa5oldSlKF0I",
    authDomain: "mail-o-clock.firebaseapp.com",
    projectId: "mail-o-clock",
    storageBucket: "mail-o-clock.appspot.com",
    messagingSenderId: "28618041446",
    appId: "1:28618041446:web:73e720f94530736c63a5a7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
