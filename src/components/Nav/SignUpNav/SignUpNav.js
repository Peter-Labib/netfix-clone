import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../UI/NFlogo/NFlogo'
import classes from './signUpNav.module.scss'

const SignUpNav = () => {
  return (
    <nav className={classes.signUpNav}>
      <Logo large={true} />
      <Link to='/login'>
        <span className={classes.signUp_txt}>Sign In</span>
      </Link>
    </nav>
  )
}

export default SignUpNav
