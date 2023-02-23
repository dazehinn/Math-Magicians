import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="Calculator">
      <div className="output">0</div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button className="zero" type="button">0</button>
      <button type="button">.</button>
      <button className="operator adds" type="button">+</button>
      <button className="operator subtracts" type="button"> - </button>
      <button className="operator multiplies" type="button"> X </button>
      <button className="operator divides" type="button">/</button>
      <button className="operator equals" type="button">=</button>
    </div>
  );
}

export default Calculator;
