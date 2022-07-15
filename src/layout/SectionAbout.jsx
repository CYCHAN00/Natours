import React, { Fragment } from 'react';

const SectionAbout = () => {
  return (
    <Fragment>
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small '>
              You're going to fail in love with nature
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
              ex explicabo. Deleniti odio suscipit consequuntur itaque voluptate
              sit vero eveniet. Quaerat corrupti non obcaecati explicabo sit
              minus ab esse aut!
            </p>
            <h3 className='heading-tertiary u-margin-bottom-small '>
              Live adventurous like you never have before
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
              ex explicabo. Deleniti odio suscipit consequuntur itaque voluptate
              sit vero eveniet. Quaerat corrupti non obcaecati explicabo sit
              minus ab esse aut!
            </p>
            <a href='/#' className='btn-text'>
              Learn More &rarr;
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                src={require('../assets/nat-1-large.jpg')}
                alt='Photo1'
                className='composition__photo composition__photo--p1'
              />
              <img
                src={require('../assets/nat-2-large.jpg')}
                alt='Photo2'
                className='composition__photo composition__photo--p2'
              />
              <img
                src={require('../assets/nat-3-large.jpg')}
                alt='Photo3'
                className='composition__photo composition__photo--p3'
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionAbout;
