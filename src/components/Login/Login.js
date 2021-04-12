import React, {useEffect} from 'react'
import { Formik, Form } from 'formik'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {authSignIn} from '../../store/actions/index'
import * as yup from 'yup'
import Logo from '../UI/NFlogo/NFlogo'
import Input from '../UI/Input/Input'
import Btn from '../UI/Btn/Btn'
import classes from './login.module.scss'

const Login = (props) => {
  const { signIn, warnMessage, regLoading, redirection, showWarn } = props

  useEffect(() => {
    if (redirection) {
      props.history.push(redirection)
    }
  }, [props.history, redirection])

  const warning = (
    <CSSTransition
      in={showWarn}
      classNames='fade'
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      <div className='signUp_warning'>
        <div>
          <i
            className='icon-attention'
            style={{ fontSize: '1.3rem', marginRight: '1rem' }}
          />
        </div>
        <div className='signUp_warning__message'>{warnMessage}</div>
      </div>
    </CSSTransition>
  )

  return (
    <div className={classes.signin}>
      <header className={classes.logoContainer}>
        <Logo large={true} />
      </header>
      <div className={classes.signin__body}>
        <div className={classes.signin__form}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('Please enter a valid email address')
                .required('Please enter a valid email address'),
              password: yup
                .string()
                .min(6, 'Password should be between 6 and 50 characters')
                .max(50, 'Password should be between 6 and 50 characters')
                .required('Password should be between 6 and 50 characters'),
            })}
            onSubmit={(value) => {
              signIn({ email: value.email, password: value.password })
            }}
          >
            {({ handleBlur, handleChange, errors }) => (
              <Form>
                <h1 className={classes.form__title}>Sign In</h1>
                {warning}
                <Input
                  signin={true}
                  placeholder='Email'
                  type='email'
                  blurHandler={handleBlur}
                  changeHandler={handleChange}
                  error={errors.email}
                />
                <p className={classes.form__error}>{errors.email}</p>
                <Input
                  signin={true}
                  placeholder='Password'
                  type='password'
                  blurHandler={handleBlur}
                  changeHandler={handleChange}
                  error={errors.password}
                />
                <p className={classes.form__error}>{errors.password}</p>
                <div className={classes.form__btnContainer}>
                  <Btn forSign={true} loading={regLoading} type='submit'>
                    Sign In
                  </Btn>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const showWarn = state.auth.signinError ? true : false
  return {
    warnMessage: state.auth.signinError,
    regLoading: state.auth.loading,
    redirection: state.auth.authRedirectPath,
    showWarn,
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: ({ email, password }) => dispatch(authSignIn({ email, password })),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)
