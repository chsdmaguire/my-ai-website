import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import LinReg from './Components/pages/LinReg';

function App() {
      return (
        <>
        <Router>
          <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/lin-reg' element={<LinReg/>} />
          </Routes>
    </Router>
    </>
  );

}

export default App;
