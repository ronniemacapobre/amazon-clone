import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDb8av1KSy1Q4VA-yV5xJLuyzrsdGNn1-Y',
  authDomain: 'clone-92c76.firebaseapp.com',
  databaseURL: 'https://clone-92c76.firebaseio.com',
  projectId: 'clone-92c76',
  storageBucket: 'clone-92c76.appspot.com',
  messagingSenderId: '915303056984',
  appId: '1:915303056984:web:9acd87f9be05d3509e2c2d',
  measurementId: 'G-DRKQWZZ55J',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
