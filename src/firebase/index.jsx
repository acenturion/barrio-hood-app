import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCu_vzklHvDuiNaRKRD5xfoFmndIl7ITKk",
    authDomain: "barrio-hood-coderhouse.firebaseapp.com",
    projectId: "barrio-hood-coderhouse",
    storageBucket: "barrio-hood-coderhouse.appspot.com",
    messagingSenderId: "773903607001",
    appId: "1:773903607001:web:c9560c8d08dadeb6a60ac8",
    measurementId: "G-F8NCT7QC05"
  }
);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
