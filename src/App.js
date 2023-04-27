import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Booking from './pages/Booking';
import Shipping from './pages/Shipping';
import ChatButton from './components/UI/ChatButton';
import { useStateContext } from './context/ContextProvider';

function App() {

  return (
    <main className="bg-main-bg h-full min-h-screen w-full" >
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/shipping' element={<Shipping />} />
      </Routes>

      <ChatButton />
    </main>
  );
}

export default App;
