import React, { useState } from 'react'

import LoginPageNav from '../LoginPageNav/LoginPageNav'

import Logo from "../../assets/global/lujam-logo-white.svg"
import ChatIcon from "../../assets/login/chat-icon.svg"
import ShowPassword from "../../assets/login/show-password.svg"
import HidePassword from "../../assets/login/Group.svg"

import "./Login.scss"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <section className="login">
            <LoginPageNav />
            <div className="login__page">
                <img src={Logo} alt="lujam logo" className="login__page--logo" />
                <form action="submit" className="login__page--form">
                    <div className="login__page--form-rectangle"></div>
                    <h3 className="login__page--form-header">Login</h3>
                    <label htmlFor="email" className="login__page--form-label">Email Address</label>
                    <input type="text" id="email" className="login__page--form-input" />
                    <label htmlFor="password" className="login__page--form-label">Password</label>
                    <div className="login__page--form-password-container">
                        <input type={!showPassword ? "password" : "text"} id="password" className="login__page--form-input" />
                        {!showPassword && <img src={HidePassword} className="hidepassword" alt="Hide password icon" onClick={handleShowPassword} />}
                        {showPassword && <img src={ShowPassword} className="showpassword" alt="Show password icon" onClick={handleShowPassword} />}
                    </div>
                    <div className="login__page--form-checkbox-container"><input type="checkbox" id="remember-me" className="login__page--form-checkbox" />
                        <label htmlFor="remember-me" className="checkbox-label">Remember Me</label>
                    </div>
                    <button className="login__page--form-button">Login</button>
                </form>
                <p className="login__page--sign-up">Don't have an account? <a href="#">Sign Up</a></p>
                <a className="login__page--link" href="#">Forgotten Your Password?</a>
            </div>
            <div className="login__chat">
                <img src={ChatIcon} alt="chat icon" className="login__chat-button" />
            </div>
        </section>
    )
}

export default Login
