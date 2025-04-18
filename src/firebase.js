
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1D4XY31DCdLeVLLNz8TmhCF30eIs0U5A",
  authDomain: "cargowave-406af.firebaseapp.com",
  projectId: "cargowave-406af",
  storageBucket: "cargowave-406af.firebasestorage.app",
  messagingSenderId: "630237866466",
  appId: "1:630237866466:web:3b331516e8eea96a7db1bb"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth} ;