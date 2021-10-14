import React, { useState } from 'react'

import LoginPageNav from '../LoginPageNav/LoginPageNav'

import Logo from "../../assets/global/lujam-logo-white.svg"
import ChatIcon from "../../assets/login/chat-icon.svg"

import LoginForm from '../LoginForm/LoginForm'

import "./Login.scss"

const Login = () => {
    
    return (
        <section className="login">
            <LoginPageNav />
            <div className="login__page">
                <img src={Logo} alt="lujam logo" className="login__page--logo" />
                <LoginForm/>
                
            </div>
            <div className="login__chat">
                <img src={ChatIcon} alt="chat icon" className="login__chat-button" />
            </div>
        </section>
    )
}

export default Login
