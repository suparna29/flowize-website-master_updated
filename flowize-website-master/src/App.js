import React, { Suspense } from 'react';
import './App.css';
import Nav from './Nav';
import About from './pages/About';
import Automation from './pages/Automation';
import Blog from './pages/Blog';
import CCM from './pages/CCM';
import Communication from './pages/Communication';
import Contact from './pages/Contact';
import Customers from './pages/Customers';
import Integrations from './pages/Integrations';
import Partners from './pages/Partners';
import {Helmet} from "react-helmet";

import { useTranslation } from 'react-i18next';

import { Routes, Route} from 'react-router-dom';
import Main from './pages/Main';


function App() {

  useTranslation();

  return (
    <Suspense fallback="loading">
    
    
    <div className="App">
      <Helmet>
        <title>Flowize</title>
      </Helmet>
      <Nav/>

      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/om-flowize" element={<About />} />
        <Route path="/automatisering" element={<Automation />} />
        <Route path="/blogg" element={<Blog />} />
        <Route path="/ccm" element={<CCM />} />
        <Route path="/kommunikasjon" element={<Communication />} />
        <Route path="/kontakt-oss" element={<Contact />} />
        <Route path="/kunder" element={<Customers />} />
        <Route path="/integrasjoner" element={<Integrations />} />
        <Route path="/partnere" element={<Partners />} />
      </Routes>
    </div>

  </Suspense>
  );
}

export default App;
