import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
  const styleActive = 'active link';
  const styleNoActive = 'noActive link';
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          >
            Home
          </NavLink>
        </li>
        <li className="liBorder">
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quote"
            className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
