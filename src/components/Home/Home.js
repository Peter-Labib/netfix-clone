import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import Nav from '../Nav/Nav'
import Btn from '../UI/Btn/Btn'
import './home.scss'

const Home = (props) => {
  console.log(props)
  const [onFocus, setOnFocus] = useState(false)
  const [value, setValue] = useState('')

  const onFocusLabelHandler = () => {
    setOnFocus(true)
  }

  const onBlurLabelHandler = () => {
    if (!value.trim()) {
      setOnFocus(false)
    }
  }

  return (
    <React.Fragment>
      <div className='ourStory'>
        <Nav style={{ position: 'static' }} />
        <div className='ourStory__card'>
          <div className='ourStory__cardContainer'>
            <h1 className='ourStory__title'>
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className='ourStory__subtitle'>
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className='ourStory__formTitle'>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email('Please enter a valid email address')
                  .required('Email is required!'),
              })
            }
           onSubmit={()=>{
             props.history.push('/signup')
           }}
            >
              {({ errors, handleBlur, handleChange,  }) => (
                <Form className='ourStory__form'>
                  <div className='input'>
                    <div className='input__container'>
                      <label
                        className={`input__label
            ${onFocus && 'input__label_toTop'}`}
                        htmlFor='homeEmailAddress'
                      >
                        Email address
                      </label>
                      <input
                        className={`input__element ${
                          errors.email && 'input__element_error'
                        }`}
                        id='homeEmailAddress'
                        type='email'
                        name='email'
                        onFocus={onFocusLabelHandler}
                        onBlur={(e) => {
                          onBlurLabelHandler()
                          handleBlur(e)
                        }}
                        onChange={(e) => {
                          setValue(e.target.value)
                          handleChange(e)
                        }}
                        autoComplete='email'
                        maxLength='50'
                      />
                    </div>
                    <p className='input_error'>{errors.email}</p>
                  </div>
                  <Btn isLarge={true}>Get started</Btn>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className='ourStory_animation'>
        <div className='ourStory_animation__container'>
          <div className='ourStory_animation__text'>
            <h1 className='ourStory_animation__title'>Enjoy on your TV.</h1>
            <h2 className='ourStory_animation__subtitle'>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <div className='ourStory_animation__img_container'>
            <img
              className='ourStory_animation__img'
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
            />
            <div className='ourStory_animation__video_container'>
              <video className='ourStory_animation__video' loop muted autoPlay>
                <source
                  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className='ourStory_animation'>
        <div className='ourStory_animation__container'>
          <div className='ourStory_animation__text'>
            <h1 className='ourStory_animation__title'>
              Download your shows to watch offline.
            </h1>
            <h2 className='ourStory_animation__subtitle'>
              Save your favorites easily and always have something to watch.
            </h2>
          </div>
          <div className='ourStory_animation__img_container'>
            <img
              className='ourStory_animation__img'
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            />
            <div className='ourStory_animation__subimage_container'>
              <img
                className='ourStory_animation__subimage'
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
              />
              <div className='ourStory_animation__subimage_text'>
                <p>Stranger Things</p>
                <p>Downloading . . .</p>
              </div>
              <img
                className='ourStory_animation__subimage'
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='ourStory_animation'>
        <div className='ourStory_animation__container'>
          <div className='ourStory_animation__text'>
            <h1 className='ourStory_animation__title'>Watch everywhere.</h1>
            <h2 className='ourStory_animation__subtitle'>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h2>
          </div>
          <div className='ourStory_animation__img_container'>
            <img
              className='ourStory_animation__img'
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
            />
            <div className='ourStory_animation__video_container ourStory_animation__video_container_3rdSection'>
              <video className='ourStory_animation__video' loop muted autoPlay>
                <source
                  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
