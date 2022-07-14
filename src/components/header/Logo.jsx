import React from 'react';
import classes from './Logo.module.scss';
const Logo = () => {
  return (
    <div className={classes['header__logo-box']}>
      <img
        src={require('../../assets/logo-white.png')}
        alt='logo'
        className={classes['header__logo']}
      />
    </div>
  );
};

export default Logo;
