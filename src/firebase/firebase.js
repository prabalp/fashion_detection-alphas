// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-zTF02Mh-AnTJcSgt4GXFVcYqzdGpE_w",
  authDomain: "fashion-detection-1f3f2.firebaseapp.com",
  projectId: "fashion-detection-1f3f2",
  storageBucket: "fashion-detection-1f3f2.appspot.com",
  messagingSenderId: "1068423481244",
  appId: "1:1068423481244:web:98c9c5641c015b20386a59",
  measurementId: "G-BXLNE31TSK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export { storage, firebase as default };
