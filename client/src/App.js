/**
 * Authors: Ryan Montoya, Arsen Shintemirov, Roman Antipov
 * TCSS 445
 * Spring 2022
 */

import React from "react"; 
import './App.css'; 
import {
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./pages/About";
import TypeTerms from "./pages/TypeTerms";
import SchoolTerms from "./pages/SchoolTerms";
import ClassTerms from "./pages/ClassTerms";

function App() { 

  return (  
    
    <div className="App"> 
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/typeterms" element={<TypeTerms />} exact />
        <Route path="/schoolterms" element={<SchoolTerms />} exact />
        <Route path="/classterms" element={<ClassTerms />} exact />
      </Routes>

    </div> 
  
  );
}

export default App;
