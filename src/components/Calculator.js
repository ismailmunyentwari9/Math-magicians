import './calc.css';
import Buttons from './buttons';

function calculator() {
  return (
    <div className="calc-container">

      <div className="output">

        <div className="current-operand" />
      </div>
      <Buttons />

    </div>
  );
}
export default calculator;
