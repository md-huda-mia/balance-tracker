import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA55w8F_bfjY8PmT7ZBTde6mKTXj5bZ2p4",
  authDomain: "chat-app-2ba64.firebaseapp.com",
  projectId: "chat-app-2ba64",
  storageBucket: "chat-app-2ba64.appspot.com",
  messagingSenderId: "112622650327",
  appId: "1:112622650327:web:14b5b4b9dd91f4f826c192",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
