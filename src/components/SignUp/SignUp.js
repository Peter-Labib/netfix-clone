import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Registration from './Registration/Registration'
import RegForm from './RegForm/RegForm'
import SignUpNav from '../Nav/SignUpNav/SignUpNav'
import Btn from '../UI/Btn/Btn'
import './signUp.scss'

const SignUp = (props) => {
  const onClickHandler = () => {
    props.history.push(props.match.url + '/regForm')
  }

  const signUpPage = (
    <div className='signUp__container'>
      <div className='signUp__regContainer'>
        <div className='signUp__icon signUp__icon_devices'> </div>
        <span className='signUp_step'>STEP 1 OF 3</span>
        <h1 className='signUp_stepTitle'>Finish setting up your account.</h1>
        <p className='signUp__txt'>
          Netflix is personalized for you. Create a password to watch Netflix on
          any device at any time.
        </p>
        <Btn forSign={true} clicked={onClickHandler}>
          Continue
        </Btn>
      </div>
    </div>
  )

  return (
    <div className='signUp'>
      <SignUpNav />
      <Switch>
        <Route path={props.match.url} exact render={() => signUpPage} />
        <Route
          path={props.match.url + '/registration'}
          exact
          component={Registration}
        />
        <Route path={props.match.url + '/regForm'}>
          {(props) => (
            <CSSTransition
              in={props.match != null}
              timeout={300}
              classNames='slide'
              unmountOnExit
              mountOnEnter
            >
              <RegForm {...props} />
            </CSSTransition>
          )}
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default SignUp
