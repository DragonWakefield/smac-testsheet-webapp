import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCziWB_EnvsB6mkKdXKxP0zK9IBx0uv69I",
    authDomain: "smac-testsheet.firebaseapp.com",
    projectId: "smac-testsheet",
    storageBucket: "smac-testsheet.appspot.com",
    messagingSenderId: "1045729946105",
    appId: "1:1045729946105:web:56d83fdc0ae17c6cc6b528"
  };

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth }