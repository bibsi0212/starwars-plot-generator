import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as StormTrooper } from '../img/stormtrooper.svg';
import { ReactComponent as C3PO } from '../img/C3PO.svg';

const Header = ({ isDarkSide, toggleDarkSide }) => (
  <header className="header d-flex flex-column align-items-center">
    <button type="button" alt="Click me I'm cool" title="Click me I'm cool" className="header-logo d-block" onClick={() => toggleDarkSide()}>
      {isDarkSide ? <StormTrooper /> : <C3PO />}
    </button>
    <h1 className="header-text">
      StarWars
      <br />
      Plot Generator
    </h1>
  </header>
);

Header.propTypes = {
  isDarkSide: PropTypes.bool.isRequired,
  toggleDarkSide: PropTypes.func.isRequired,
};

export default Header;
