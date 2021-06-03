import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC3gQDpJ8fz90LYNkycD-0txaHD2_AxbHE',
  authDomain: 'facebook-6d227.firebaseapp.com',
  projectId: 'facebook-6d227',
  storageBucket: 'facebook-6d227.appspot.com',
  messagingSenderId: '125562707627',
  appId: '1:125562707627:web:1df5b13f953e67179a61ee',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
