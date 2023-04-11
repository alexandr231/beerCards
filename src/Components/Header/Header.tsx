import React from 'react';
import beerLogo from '../../assets/img/beer.png';
import './header.css'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <img src={beerLogo} alt='beer logo'></img>
      <div className='headerText'>Beer cards</div>
    </div>
  );
};

export default Header;
