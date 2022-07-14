import React from 'react';
import classes from './Header.module.scss';
import Heading from './Heading';

import Logo from './Logo';
const Header = () => {
  return (
    <header className={classes.header}>
      <Logo></Logo>
      <Heading></Heading>
    </header>
  );
};

export default Header;
