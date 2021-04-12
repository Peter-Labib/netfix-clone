import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { authSignUp } from '../../../store/actions/index'
import * as yup from 'yup'
import Btn from '../../UI/Btn/Btn'
import Input from '../../UI/Input/Input'
import './regForm.scss'

const RegForm = (props) => {
  const {
    signUp,
    warnMessage,
    regLoading,
    redirection,
    showWarn,
    email,
  } = props

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
    <div className='signUp__container signUp__container_regform'>
      <div className='signUp__regContainer'>
        {warning}
        <span className='signUp_step'>STEP 1 OF 3</span>
        <h1 className='signUp_stepTitle'>
          Create a password to start your membership.
        </h1>
        <p className='signUp__formTxt'>
          Just a few more steps and you&apos;re done!
          <br /> We hate paperwork, too.
        </p>
        <Formik
          initialValues={{
            email,
            password: '',
          }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email('Please enter a valid email address')
              .required('Email is required!'),
            password: yup
              .string()
              .min(6, 'Password should be between 6 and 50 characters')
              .max(50, 'Password should be between 6 and 50 characters')
              .required('Password is required!'),
          })}
          onSubmit={(value) => {
            signUp({ email: value.email, password: value.password })
          }}
        >
          {({ handleBlur, handleChange, errors }) => (
            <Form className='signUp_form'>
              <Input
                initialValue={email}
                blurHandler={handleBlur}
                changeHandler={handleChange}
                placeholder={'Email'}
                type='email'
                error={errors.email}
                signup={true}
              />
              <p className='signUp_form__error'>{errors.email}</p>
              <Input
                blurHandler={handleBlur}
                changeHandler={handleChange}
                placeholder={'add a password'}
                type='password'
                signupError={errors.password}
              />
              <p className='signUp_form__error'>{errors.password}</p>
              <div className='signUp_form__btnContainer'>
                <Btn forSign={true} loading={regLoading} type='submit'>
                  Continue
                </Btn>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const showWarn = state.auth.signUpError ? true : false
  return {
    warnMessage: state.auth.signUpError,
    regLoading: state.auth.loading,
    redirection: state.auth.authRedirectPath,
    email: state.auth.email,
    showWarn,
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: ({ email, password }) => dispatch(authSignUp({ email, password })),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegForm)
