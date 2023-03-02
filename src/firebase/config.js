// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";



export const firebaseConfig = {
  apiKey: "AIzaSyDcxW_MTDSx1kOYZt_TtVufiJc1YiSHF5g",
  authDomain: "shopapp-a3c89.firebaseapp.com",
  projectId: "shopapp-a3c89",
  storageBucket: "shopapp-a3c89.appspot.com",
  messagingSenderId: "540656518362",
  appId: "1:540656518362:web:477106ee33c62e752b51e3",
  measurementId: "G-5TKE7KBPY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
// const analytics = getAnalytics(app);