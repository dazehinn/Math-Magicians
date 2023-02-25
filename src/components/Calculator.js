import React from 'react';

import PropTypes from 'prop-types';

import './Calculator.css';

function Calculator() {
  return (
    <div className="Calculator">
      <div className="output">0</div>
      <Button sign="AC" />
      <Button sign="+/-" />
      <Button sign="%" />
      <Button sign="7" />
      <Button sign="8" />
      <Button sign="9" />
      <Button sign="4" />
      <Button sign="5" />
      <Button sign="6" />
      <Button sign="1" />
      <Button sign="2" />
      <Button sign="3" />
      <Button className="zero" sign="0" />
      <Button sign="." />
      <Button className="operator adds" sign="+" />
      <Button className="operator subtracts" sign="-" />
      <Button className="operator multiplies" sign="x" />
      <Button className="operator divides" sign="/" />
      <Button className="operator equals" sign="=" />
    </div>
  );
}

const Button = ({ sign, className }) => (
  <button className={className} type="button">{sign}</button>
);

Button.propTypes = {
  sign: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = { className: 'fan' };

export default Calculator;
