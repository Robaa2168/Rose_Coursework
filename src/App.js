import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AppNavbar from './components/Navbar';
import Landing from './components/landing';
import { Last } from 'react-bootstrap/esm/PageItem';

function App() {

  return (
 
    <BrowserRouter>
    <AppNavbar/>
      <div className="App">
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/search" element={<Home />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;