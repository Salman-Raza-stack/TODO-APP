import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCkdmxfuAqIs3mqE2bp-HbajIfqFz9K_PM',
  authDomain: 'salman-todo-app-a3522.firebaseapp.com',
  databaseURL: 'https://salman-todo-app-a3522.firebaseio.com',
  projectId: 'salman-todo-app-a3522',
  storageBucket: 'salman-todo-app-a3522.appspot.com',
  messagingSenderId: '897782909809',
  appId: '1:897782909809:web:a31c88b2bece76868f44d0',
  measurementId: 'G-5FEJQBPYKG',
});

const db = firebaseApp.firestore();

export default db;
