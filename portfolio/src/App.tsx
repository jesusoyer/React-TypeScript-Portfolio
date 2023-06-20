import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from './components/NavigationBar';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from "./components/contactComponents/Contact";
import Interests from './components/Interest';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
    <div >
      
    <div className="md:container md:mx-auto text-center ">
      <div className='text-left'>JO: Portfolio</div>
    <NavigationBar />
    <Routes>
    
    <Route path="/home" element={<Home />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/interests" element={<Interests />}/>
    <Route path="/contact" element={<Contact />}/>
    </Routes>
    
    </div>
    </div>
    </Router>
  );
}

export default App;
