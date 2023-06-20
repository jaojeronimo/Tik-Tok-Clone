import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

 const firebaseConfig = {
    apiKey: "AIzaSyByrR-JjYgTr1zkvmmznxPV5K7GTStzZm4", 
    authDomain: "tiktok-clone-17cde.firebaseapp.com", 
    projectId: "tiktok-clone-17cde", 
    storageBucket: "tiktok-clone-17cde.appspot.com", 
    messagingSenderId: "856378424155", 
    appId: "1:856378424155:web:1e1b84f0d2e7fbfc1e787e" 
}; 


 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

export default db;