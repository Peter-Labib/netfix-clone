import React from 'react'
import Logo from '../../UI/NFlogo/NFlogo'
import classes from './signUpNav.module.scss'

const SignUpNav = () => {
    return (
        <nav className={classes.signUpNav}>
            <Logo signUpNav={true} />
            <span className={classes.signUp_txt}>sign up</span>
        </nav>
    )
}

export default SignUpNav
