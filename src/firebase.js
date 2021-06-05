import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/database'

try {
    var firebaseConfig = {
        apiKey: "AIzaSyD6mbWbnbQJlsCtUQPSU5b7cwXOS9BIGM8",
        authDomain: "kidsratetoys.firebaseapp.com",
        projectId: "kidsratetoys",
        storageBucket: "kidsratetoys.appspot.com",
        messagingSenderId: "489769612911",
        appId: "1:489769612911:web:251ac596d0e5c6c9387f9a",
        measurementId: "G-7G0TPP01BP"
    };
} catch (error) {
    console.log(error)
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export {
    storage, firebase as default
}