import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from './utils/firebase'
import { authSuccess } from './store/actions/index'
import AuthedHome from './components/AuthedHome/AuthedHome'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import './fontello/css/fontello.css'
import './fontello/css/animation.css'

function App(props) {
  const { authed, checkSignIn } = props

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        checkSignIn({ email: user.email, uid: user.uid })
      }
    })
  }, [checkSignIn])

  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={authed ? AuthedHome : Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => ({
  authed: state.auth.uid,
})

const mapDispatchToProps = (dispatch) => ({
  checkSignIn: ({ email, uid }) => dispatch(authSuccess({ email, uid })),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
