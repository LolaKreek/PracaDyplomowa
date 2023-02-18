import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/themes/default/theme.scss';
import React from 'react';
import Homepage from "./pages/homepage";
import Quiz from './pages/quiz';
import Instruction from './pages/instruction';
import Profile from './pages/profile';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import Login from './pages/login';
import Footer from './components/Footer';
import Registration from './pages/registration';

function App() {
    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDIZVaDRUPUxnfPSGgHs16I-EPWySUK2FY",
    authDomain: "pracadyplomowa-8a45f.firebaseapp.com",
    projectId: "pracadyplomowa-8a45f",
    storageBucket: "pracadyplomowa-8a45f.appspot.com",
    messagingSenderId: "324703695321",
    appId: "1:324703695321:web:069a55f84e3da8dc8c29c8"
  };
  
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  // const querySnapshot = getDocs(collection(db, "kategorie"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.name()}`);
  // });
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
