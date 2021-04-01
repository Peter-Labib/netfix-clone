import React from 'react'
import Nav from '../Nav/Nav'
import Input from '../UI/Input/Input'
import Btn from '../UI/Btn/Btn'
import classes from './home.module.scss'

const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.ourStory}>
        <Nav style={{ position: 'absolute', padding: '2rem' }} />
        <div className={classes.ourStory__card}>
          <div className={classes.ourStory__cardContainer}>
            <h1 className={classes.ourStory__title}>
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className={classes.ourStory__subtitle}>
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className={classes.ourStory__formTitle}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className={classes.ourStory__form}>
              <Input
                id='our-story-email'
                placeholder='Email address'
                type='email'
                isLarge={true}
              />
              <Btn isLarge={true}>Get started</Btn>
            </form>
          </div>
        </div>
      </div>

      <div className={classes.ourStory_animation}>
        <div className={classes.ourStory_animation__container}>
          <div className={classes.ourStory_animation__text}>
            <h1 className={classes.ourStory_animation__title}>
              Enjoy on your TV.
            </h1>
            <h2 className={classes.ourStory_animation__subtitle}>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <div className={classes.ourStory_animation__img_container}>
            <img
              className={classes.ourStory_animation__img}
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
            />
            <div className={classes.ourStory_animation__video_container}>
              <video
                className={classes.ourStory_animation__video}
                loop
                muted
                autoPlay
              >
                <source
                  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ourStory_animation}>
        <div className={classes.ourStory_animation__container}>
          <div className={classes.ourStory_animation__text}>
            <h1 className={classes.ourStory_animation__title}>
              Download your shows to watch offline.
            </h1>
            <h2 className={classes.ourStory_animation__subtitle}>
              Save your favorites easily and always have something to watch.
            </h2>
          </div>
          <div className={classes.ourStory_animation__img_container}>
            <img
              className={classes.ourStory_animation__img}
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            />
            <div className={classes.ourStory_animation__subimage_container}>
              <img className={classes.ourStory_animation__subimage} src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' />
              <div className={classes.ourStory_animation__subimage_text}>
                <p>Stranger Things</p>
                <p>Downloading . . .</p>
              </div>
              <img className={classes.ourStory_animation__subimage} src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ourStory_animation}>
        <div className={classes.ourStory_animation__container}>
          <div className={classes.ourStory_animation__text}>
            <h1 className={classes.ourStory_animation__title}>
              Watch everywhere.
            </h1>
            <h2 className={classes.ourStory_animation__subtitle}>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h2>
          </div>
          <div className={classes.ourStory_animation__img_container}>
            <img
              className={classes.ourStory_animation__img}
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
            />
            <div
              className={`${classes.ourStory_animation__video_container} ${classes.ourStory_animation__video_container_3rdSection}`}
            >
              <video
                className={classes.ourStory_animation__video}
                loop
                muted
                autoPlay
              >
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
