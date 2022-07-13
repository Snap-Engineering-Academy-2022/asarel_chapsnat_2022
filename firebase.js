import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7Yv6ljE27QCeLWipl2B-SsntHSad-UlM",
    authDomain: "chapsnat-a9697.firebaseapp.com",
    projectId: "chapsnat-a9697",
    storageBucket: "chapsnat-a9697.appspot.com",
    messagingSenderId: "1030877927340",
    appId: "1:1030877927340:web:5e95ade6c47f0f152f4c09",
    measurementId: "G-TFX2E4ZSMV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;