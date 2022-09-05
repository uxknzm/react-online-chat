import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDUxdWjahmeq0tSm-yhJCaeDn4jQMtXH0o",
  authDomain: "chat-uxknzm.firebaseapp.com",
  projectId: "chat-uxknzm",
  storageBucket: "chat-uxknzm.appspot.com",
  messagingSenderId: "258826202330",
  appId: "1:258826202330:web:a78b436c6ace1a1c9309e3",
  measurementId: "G-QK3EXD163K"
}

const app = initializeApp(firebaseConfig);

export const Context = createContext(null)

const auth = getAuth(app)
const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
       auth, firestore
    }}>
    <App />
    </Context.Provider>
  </React.StrictMode>
);
