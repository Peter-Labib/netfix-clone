import * as actionType from './actionTypes'
import { auth } from '../../utils/firebase'

const authStart = () => {
  return {
    type: actionType.AUTH_START,
  }
}

export const authSuccess = ({ uid, email }) => {
  return {
    type: actionType.AUTH_SUCCESS,
    uid,
    email,
  }
}

const authFailed = ({ signinError, signUpError }) => {
  return {
    type: actionType.AUTH_FAILED,
    signinError,
    signUpError,
  }
}

const authLogout = () => {
  return {
    type: actionType.AUTH_LOGOUT,
  }
}

const authRedirectPath = (path) => {
  return {
    type: actionType.SET_AUTH_REDIRECT_PATH,
    path,
  }
}

export const setInitialEmail = (email) => {
  return {
    type: actionType.INITIAL_EMAIL,
    email,
  }
}

export const authSignUp = ({ email, password }) => (dispatch) => {
  dispatch(authStart())
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      dispatch(authSuccess({ uid: user.uid, email: user.email }))
      dispatch(authRedirectPath('/'))
    })
    .catch((err) => dispatch(authFailed({ signUpError: err.message })))
}

export const authSignIn = ({ email, password }) => (dispatch) => {
  dispatch(authStart())
  return auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      dispatch(authSuccess({ uid: user.uid, email: user.email }))
      dispatch(authRedirectPath('/'))
    })
    .catch((err) => dispatch(authFailed({ signinError: err.message })))
}

export const authLogoutHandler = () => (dispatch) => {
  return auth.signOut().then(() => dispatch(authLogout()))
}
