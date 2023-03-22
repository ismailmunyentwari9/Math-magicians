import './calc.css';
import React, { useState } from 'react';
import Calculate from './logic/calculate';
import Buttons from './buttons';
import ScreenValue from './logic/screenValue';

function Calculator() {
  const [result, setResult] = useState(0);
  const handleClick = (e) => {
    setResult((obj) => Calculate(obj, e.target.innerText));
  };

  return (
    <div className="calc-container">

      <div className="output">
        <ScreenValue result={result.next || result.total || '0'} />
      </div>
      <Buttons handleClick={handleClick} />

    </div>
  );
}
export default Calculator;
