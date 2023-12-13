import React from 'react';

import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './src/components/Login';
import About from './components/About';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;