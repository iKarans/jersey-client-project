import React from 'react'

import LoginPageNav from '../LoginPageNav/LoginPageNav'
import Logo from "../../assets/global/lujam-logo-white.svg"

import "./Login.scss"

const Login = () => {
    return (
        <section className="login">
            <LoginPageNav />
            <div className="login__page">
                <img src={Logo} alt="lujam logo" className="login__page--logo"/>
            </div>
            
        </section>
    )
}

export default Login
