import React from 'react';
import Button from './Button';

const SectionBook = () => {
  return (
    <section className='section-book'>
      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form action='#' className='form'>
              <div className=' u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Start Booking now</h2>
              </div>
              <div className='form__group'>
                <input
                  id='name'
                  type='text'
                  className='form__input'
                  placeholder='Full Name'
                  required
                />
                <label htmlFor='name' className='form__label'>
                  Full Name
                </label>
              </div>
              <div className='form__group'>
                <input
                  id='email'
                  type='text'
                  className='form__input'
                  placeholder='Email address'
                  required
                />
                <label htmlFor='email' className='form__label'>
                  Email Address
                </label>
              </div>
              <div className='form__group u-margin-bottom-medium'>
                <div className='form__ratio-group'>
                  <input
                    type='radio'
                    className='form__radio-input'
                    id='small'
                    name='size'
                  />
                  <label htmlFor='small' className='form__radio-label'>
                    <span className='form__radio-button'></span> Small tour
                    group
                  </label>
                </div>

                <div className='form__ratio-group'>
                  <input
                    type='radio'
                    className='form__radio-input'
                    id='large'
                    name='size'
                  />
                  <label htmlFor='large' className='form__radio-label'>
                    <span className='form__radio-button'></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className='form__group'>
                <Button type='button' className='btn--green btn--animated'>
                  Next step &rarr;
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBook;
