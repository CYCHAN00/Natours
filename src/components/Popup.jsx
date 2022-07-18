import React from 'react';
import Button from './Button';
const Popup = () => {
  return (
    <div className='popup' id='popup'>
      <div className='popup__content'>
        <div className='popup__left'>
          <img
            src={require('../assets/nat-8.jpg')}
            alt='TourPhoto'
            className='popup__img'
          />
          <img
            src={require('../assets/nat-9.jpg')}
            alt='TourPhoto'
            className='popup__img'
          />
        </div>
        <div className='popup__right'>
          <a href='#section-tours' className='popup__close'>
            &times;
          </a>
          <h2 className='heading-secondary u-margin-bottom-small'>
            Start booking now
          </h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Important &ndash; Please read these terms before booking
          </h3>
          <p className='popup__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            sem fringilla ut morbi tincidunt augue interdum velit euismod. Eget
            nullam non nisi est. Elit eget gravida cum sociis natoque penatibus
            et magnis dis. Massa tempor nec feugiat nisl pretium fusce id velit
            ut. Commodo nulla facilisi nullam vehicula. Eget magna fermentum
            iaculis eu non diam phasellus vestibulum lorem. Scelerisque purus
            semper eget duis. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Orci phasellus egestas tellus rutrum tellus
            pellentesque eu tincidunt tortor. Nulla aliquet porttitor lacus
            luctus accumsan tortor posuere. Consequat mauris nunc congue nisi
            vitae suscipit. Donec enim diam vulputate ut pharetra sit amet
            aliquam. Et ligula ullamcorper malesuada proin libero. Amet mauris
            commodo quis imperdiet massa. Sagittis nisl rhoncus mattis rhoncus.
          </p>
          <Button type='button' className='btn--green btn--animated'>
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
