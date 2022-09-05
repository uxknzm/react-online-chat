import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './components/Loader';
import { Context } from '.';

function App() {
  const { auth } = useContext(Context)
    const [user, loading, error] = useAuthState(auth)
    if(loading) {
     return <Loader />
    }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
