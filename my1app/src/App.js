import React from 'react';
// import './assets/css/App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import signin from './components/signin';
import About from './components/About';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<signin/>}/>
        <Route exact path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;