import React from 'react';

const SectionStories = () => {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src={require('../assets/video.mp4')} />
          <source src={require('../assets/video.webm')} />
          Your browser is not supported!
        </video>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We make people genuinely happy</h2>
      </div>
      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img
              srcSet={`
                 ${require('../assets/nat-8.jpg')} 2000w
               `}
              sizes='(max-width:900px) 20vw, (max-width:600px) 30vw,300px'
              alt='Person on a tour'
              className='story__img'
              src={require('../assets/nat-8.jpg')}
            />

            <figcaption className='story__caption'>Mary Smith</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              consectetur quos, minus recusandae excepturi soluta nulla
              doloribus animi beatae voluptatem in, officia dolores dignissimos
              architecto, aperiam reprehenderit nam hic aut! officia dolores
              dignissimos architecto, aperiam reprehenderit nam hic aut!
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img
              className='story__img'
              src={require('../assets/nat-9.jpg')}
              alt='Person on a tour'
            />
            <figcaption className='story__caption'>Jack Wilson</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Wow! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              consectetur quos, minus recusandae excepturi soluta nulla
              doloribus animi beatae voluptatem in, officia dolores dignissimos
              architecto, aperiam reprehenderit nam hic aut! officia dolores
              dignissimos architecto, aperiam reprehenderit nam hic aut!
            </p>
          </div>
        </div>
      </div>
      <div className='u-center-text u-margin-top-huge'>
        <a href='/#' className='btn-text '>
          Reed all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default SectionStories;
