import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here


const firebaseConfig = {
    apiKey: "AIzaSyDLdDmpOdeV4Uka377Li-Pkif7LQejBM6w",
    authDomain: "e-rider-c22e6.firebaseapp.com",
    projectId: "e-rider-c22e6",
    storageBucket: "e-rider-c22e6.appspot.com",
    messagingSenderId: "687713859384",
    appId: "1:687713859384:web:6a775288875d55062c33cd"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


