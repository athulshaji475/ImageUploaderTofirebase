// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =initializeApp( {
 // apiKey: "AIzaSyDh_X3rs6ZFhI_xV-i4x6IuGmeXHC0d2cA",
 // authDomain: "imagestore-df782.firebaseapp.com",
 // projectId: "imagestore-df782",
// storageBucket: "imagestore-df782.appspot.com",
 //messagingSenderId: "56441809146",
 // appId: "1:56441809146:web:ba201bef3cb52da5f34143"
  //TDAAK
 apiKey: "AIzaSyCmxZ8-tUiVjLsQVbImVSwiwULw29aPWIc",
  authDomain: "tdaak-24c81.firebaseapp.com",
  projectId: "tdaak-24c81",
  storageBucket: "tdaak-24c81.appspot.com",
  messagingSenderId: "47406394112",
  appId: "1:47406394112:web:92e82cbe11e94df980e1e5"
});

// Initialize Firebase
const storage = getStorage(firebaseConfig);
export default storage