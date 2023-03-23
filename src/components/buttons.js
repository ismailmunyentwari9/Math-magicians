import './button.css';
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ handleClick }) => (
  <div className="buttons">
    <button onClick={handleClick} type="button">
      AC
    </button>
    <button onClick={handleClick} type="button">
      +/-
    </button>
    <button onClick={handleClick} type="button">
      %
    </button>
    <button onClick={handleClick} type="button">
      ÷
    </button>
    <button onClick={handleClick} type="button">
      7
    </button>
    <button onClick={handleClick} type="button">
      8
    </button>
    <button onClick={handleClick} type="button">
      9
    </button>
    <button onClick={handleClick} type="button">
      x
    </button>
    <button onClick={handleClick} type="button">
      4
    </button>
    <button onClick={handleClick} type="button">
      5
    </button>
    <button onClick={handleClick} type="button">
      6
    </button>
    <button onClick={handleClick} type="button">
      -
    </button>
    <button onClick={handleClick} type="button">
      1
    </button>
    <button onClick={handleClick} type="button">
      2
    </button>
    <button onClick={handleClick} type="button">
      3
    </button>
    <button onClick={handleClick} type="button">
      +
    </button>
    <button onClick={handleClick} type="button">
      0
    </button>
    <button onClick={handleClick} type="button">
      .
    </button>
    <button onClick={handleClick} type="button">
      =
    </button>
  </div>
);

Buttons.propTypes = { handleClick: PropTypes.func.isRequired };
export default Buttons;
