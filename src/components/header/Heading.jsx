import React from 'react';
import classes from './Heading.module.scss';
const Heading = () => {
  return (
    <div className={classes['header__text-box']}>
      <h1 className={classes['heading-primary']}>
        <span className={classes['heading-primary--main']}>Outdoors</span>
        <span className={classes['heading-primary--sub']}>
          is where life happy
        </span>
      </h1>
      <button
        className={`${classes.btn} ${classes['btn--white']} ${classes['btn--animated']}`}
        type='button'
      >
        Discover out tours
      </button>
    </div>
  );
};

export default Heading;
