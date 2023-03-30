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
    <div style={{ backgroundColor: '#E0E0E0', padding: '20px' }}>
      <div style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>
        Let us do some math!
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <div style={{ marginBottom: '20px' }}>
          <ScreenValue result={result.next || result.total || '0'} />
        </div>
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
