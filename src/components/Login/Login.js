import React from 'react'
import Logo from '../UI/NFlogo/NFlogo'
import classes from './login.module.scss'

const Login = () => {
    return (
        <div className={classes.signin_wrapper}>
            <Logo />
            <div className={classes.signin}>
                <h1>Sign In</h1>
            </div>
        </div>
    )
}

export default Login
