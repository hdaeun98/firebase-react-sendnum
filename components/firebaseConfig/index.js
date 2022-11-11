import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyAF19D4DuLUkBSsVCUTBnCH1-0365OEyo0",
    authDomain: "react-firebase-c8f01.firebaseapp.com",
    databaseURL: "https://react-firebase-c8f01-default-rtdb.firebaseio.com",
    projectId: "react-firebase-c8f01",
    storageBucket: "react-firebase-c8f01.appspot.com",
    messagingSenderId: "534546012181",
    appId: "1:534546012181:web:c0d9c4d8667acad09fd61c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;