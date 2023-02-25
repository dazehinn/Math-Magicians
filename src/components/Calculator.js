import PropTypes from 'prop-types';
import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    setResult((prevState) => calculate(prevState, event.target.innerText));
  };
  return (
    <div className="Calculator">
      <div className="output">{result.next || result.total || 0}</div>
      <Button sign="AC" handleOnClick={handleClick} />
      <Button sign="+/-" handleOnClick={handleClick} />
      <Button sign="%" handleOnClick={handleClick} />
      <Button sign="7" handleOnClick={handleClick} />
      <Button sign="8" handleOnClick={handleClick} />
      <Button sign="9" handleOnClick={handleClick} />
      <Button sign="4" handleOnClick={handleClick} />
      <Button sign="5" handleOnClick={handleClick} />
      <Button sign="6" handleOnClick={handleClick} />
      <Button sign="1" handleOnClick={handleClick} />
      <Button sign="2" handleOnClick={handleClick} />
      <Button sign="3" handleOnClick={handleClick} />
      <Button className="zero" sign="0" handleOnClick={handleClick} />
      <Button sign="." handleOnClick={handleClick} />
      <Button className="operator adds" sign="+" handleOnClick={handleClick} />
      <Button className="operator subtracts" sign="-" handleOnClick={handleClick} />
      <Button className="operator multiplies" sign="x" handleOnClick={handleClick} />
      <Button className="operator divides" sign="÷" handleOnClick={handleClick} />
      <Button className="operator equals" sign="=" handleOnClick={handleClick} />
    </div>
  );
}

const Button = ({ sign, className, handleOnClick }) => (
  <button className={className} type="button" onClick={handleOnClick}>{sign}</button>
);

Button.propTypes = {
  sign: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
};

Button.defaultProps = { className: 'fan' };

export default Calculator;
