import React from 'react'

import Logo from "../../assets/global/lujam-logo-white.svg"

import "./LoginPageNav.scss"

const LoginPageNav = () => {
    return (
        <nav className="login__nav">
            <img src={Logo} alt="Lujam logo" className="login__nav--logo"/>
            <ul className="login__nav--links">
                <li className="login__nav-link">About</li>
                <li className="login__nav-link">How it works?</li>
                <li className="login__nav-link">Contact</li>
            </ul>
        </nav>
    )
}

export default LoginPageNav
