import React, { Fragment } from 'react';
import Button from '../components/Button';

const Header = () => {
  return (
    <Fragment>
      <header className={'header'}>
        <div className={'header__logo-box'}>
          <img
            src={require('../assets/logo-white.png')}
            alt='logo'
            className={'header__logo'}
          />
        </div>
        <div className={'header__text-box'}>
          <h1 className={'heading-primary'}>
            <span className={'heading-primary--main'}>Outdoors</span>
            <span className={'heading-primary--sub'}>is where life happy</span>
          </h1>
          <Button className='btn--white btn--animated' type='button'>
            Discover out tours
          </Button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
