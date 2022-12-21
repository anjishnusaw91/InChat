import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAlTsPM02Ck1Uh9AmcWHGJnZ8cud6PmeRY",
    authDomain: "inchat-2022.firebaseapp.com",
    projectId: "inchat-2022",
    storageBucket: "inchat-2022.appspot.com",
    messagingSenderId: "637059471171",
    appId: "1:637059471171:web:8d6bb1613a44f9806281f6"  
}).auth();
