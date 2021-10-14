import React from 'react'

import LoginPageNav from '../LoginPageNav/LoginPageNav'
import LoginForm from '../LoginForm/LoginForm'
import ChatButton from '../ChatButton/ChatButton.jsx'

import Logo from "../../assets/global/lujam-logo-white.svg"

import "./Login.scss"

const Login = () => {
    
    return (
        <section className="login">
            <LoginPageNav />
            <div className="login__page">
                <img src={Logo} alt="lujam logo" className="login__page--logo" />
                <LoginForm/>
            </div>
            <ChatButton/>
        </section>
    )
}

export default Login
