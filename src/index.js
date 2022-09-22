import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(

    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />Home
        <Route exact path="/Home" element={<Home/>} />Home
        <Route exact path="/About" element={<About/>} />About
        <Route exact path="/Services" element={<Services/>} />Services
        <Route exact path="/Contact" element={<Contact/>} />Contact

      </Routes>

    </BrowserRouter>
,

  document.getElementById('root')
);

