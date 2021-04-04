import React from 'react'
import SignUpNav from '../../Nav/SignUpNav/SignUpNav'
import Btn from '../../UI/Btn/Btn'
import './registration.scss'

const Registration = () => {
  return (
      <div className='signUp__container'>
        <div className='signUp__regContainer'>
          <div className='signUp__icon signUp__icon_checkmark'> </div>
          <span className='signUp_step'>STEP 1 OF 3</span>
          <h1 className='signUp_stepTitle'>Choose your plan.</h1>
          <ul className='checkmark_group'>
            <li className='checkmark_group__row'>
              <svg
                viewBox='0 0 24 24'
                className='checkmark_group__icon'
                aria-hidden='true'
              >
                <path
                  fill='currentColor'
                  d='M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z'
                ></path>
              </svg>
              <span className='checkmark_group__txt'>
                No commitments, cancel anytime.
              </span>
            </li>
            <li className='checkmark_group__row'>
              <svg
                viewBox='0 0 24 24'
                className='checkmark_group__icon'
                aria-hidden='true'
              >
                <path
                  fill='currentColor'
                  d='M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z'
                ></path>
              </svg>
              <span className='checkmark_group__txt'>
                Everything on Netflix for one low price.
              </span>
            </li>
            <li className='checkmark_group__row'>
              <svg
                viewBox='0 0 24 24'
                className='checkmark_group__icon'
                aria-hidden='true'
              >
                <path
                  fill='currentColor'
                  d='M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z'
                ></path>
              </svg>
              <span className='checkmark_group__txt'>
                Unlimited viewing on all your devices.
              </span>
            </li>
          </ul>
          <Btn forSign={true}>See the Plans</Btn>
        </div>
      </div>
  )
}

export default Registration
