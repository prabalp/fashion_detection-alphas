import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage, firebaseApp as default };
