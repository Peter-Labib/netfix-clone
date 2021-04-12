import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authLogoutHandler } from '../../store/actions/index'
// import avatar from '../../assets/avatar.png'
import Btn from '../UI/Btn/Btn'
import Logo from '../UI/NFlogo/NFlogo'
import classes from './nav.module.scss'

const Nav = (props) => {
  const { style = {}, authed, logout } = props
  const [show, setShow] = useState([classes.nav])
  const history = useHistory()

  useEffect(() => {
    const navTriansitionHandler = () => {
      if (window.scrollY > 100) {
        setShow([classes.nav, classes.nav_show])
      } else {
        setShow([classes.nav])
      }
    }
    if (authed) {
      window.addEventListener('scroll', navTriansitionHandler)
    }

    return () => window.removeEventListener('scroll', navTriansitionHandler)
  }, [authed, show])

  const signinHandler = () => {
    history.push('/login')
  }

  const logoutHandler = () => {
    logout()
  }

  return (
    <nav className={show.join(' ')} style={style}>
      <Logo />
      {authed ? (
        // <img className={classes.nav__avatar} src={avatar} alt='avatar' />
        <Btn clicked={logoutHandler}>Sign Out</Btn>
      ) : (
        <Btn clicked={signinHandler}>Sign In</Btn>
      )}
    </nav>
  )
}

const mapStateToProps = (state) => ({
  authed: state.auth.uid,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authLogoutHandler()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
