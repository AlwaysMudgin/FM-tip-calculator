import React from 'react';
import logo from '../../assets/images/logo.svg';

function LogoHeader() {
  return (
    <header className="logo-header">
      <img className="logo" src={logo} alt="splitter logo" />
    </header>
  );
}

export default LogoHeader;
