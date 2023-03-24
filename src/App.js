import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Qoutes from './components/Qoute';

function App() {
  const [showHome, setHome] = useState(true);
  const [showCalc, setCalc] = useState(false);
  const [showQoute, setQoute] = useState(false);

  const handleHomeClick = () => {
    setHome(true);
    setCalc(false);
    setQoute(false);
  };

  const handleCalcClick = () => {
    setCalc(true);
    setHome(false);
    setQoute(false);
  };

  const handleQouteClick = () => {
    setCalc(false);
    setHome(false);
    setQoute(true);
  };

  return (
    <div className="App">
      <div className="Nav-bar">
        <div className="project-name">
          <span>Math Magicians</span>
        </div>

        <ul>
          <li><button type="button" onClick={handleHomeClick}>Home</button></li>

          <li><button type="button" onClick={handleCalcClick}>Calculator</button></li>
          <li><button type="button" onClick={handleQouteClick}>Qoute</button></li>

        </ul>
      </div>

      {showHome && (
        <div className="Home-section">
          <Home />
        </div>
      )}

      {showCalc && (
        <div className="cal-section">
          <Calculator />
        </div>
      )}

      {showQoute && (
        <div className="Qoute-section">
          <Qoutes />
        </div>
      )}
    </div>
  );
}

export default App;
