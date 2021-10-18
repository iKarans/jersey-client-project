import React from 'react'

import Logo from "../../assets/global/lujam-logo-white.svg"

import "./LoginPageNav.scss"

const LoginPageNav = () => {
    return (
        <nav className="login-nav">
            <img src={Logo} alt="Lujam logo" className="login-nav__logo"/>
            <ul className="login-nav__links">
                <li className="login-nav__link">About</li>
                <li className="login-nav__link">How it works?</li>
                <li className="login-nav__link">Contact</li>
            </ul>
        </nav>
    )
}

export default LoginPageNav
