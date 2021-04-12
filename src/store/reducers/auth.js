import * as actionType from '../actions/actionTypes'

const initialState = {
  email: null,
  uid: null,
  loading: false,
  authRedirectPath: '',
  signUpError: null,
  signinError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return { ...state, loading: true, signUpError: null, signinError: null }
    case actionType.AUTH_SUCCESS:
      return { ...state, email: action.email, uid: action.uid, loading: false }
    case actionType.AUTH_FAILED:
      return {
        ...state,
        signUpError: action.signUpError,
        signinError: action.signinError,
        loading: false,
      }
    case actionType.AUTH_LOGOUT:
      return { ...state, email: null, uid: null }
    case actionType.SET_AUTH_REDIRECT_PATH:
      return { ...state, authRedirectPath: action.path }
    case actionType.INITIAL_EMAIL:
      return { ...state, email: action.email }

    default:
      return state
  }
}
