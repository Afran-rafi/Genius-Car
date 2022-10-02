import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAp_bXl3sJrtG2kB0el8RjePjvhXTNqHzk",
  authDomain: "genius-car-pro.firebaseapp.com",
  projectId: "genius-car-pro",
  storageBucket: "genius-car-pro.appspot.com",
  messagingSenderId: "837661562875",
  appId: "1:837661562875:web:99f43a3e7250739d059d5e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;