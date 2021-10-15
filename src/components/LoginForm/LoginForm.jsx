import React, {useState} from 'react'

import ShowPassword from "../../assets/login/show-password.svg"
import HidePassword from "../../assets/login/hide-password.svg"



import "./LoginForm.scss"


const LoginForm = () => {
    
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    
    return (
        <div className = "login__form-container">
            <form action="submit" className="login__form">
                <div className="login__form-rectangle"></div>
                    <h3 className="login__form-header">Login</h3>
                    <label htmlFor="email" className="login__form-label">Email Address</label>
                    <input type="text" id="email" className="login__form-input" />
                    <label htmlFor="password" className="login__form-label">Password</label>
                    <div className="login__form-password-container">
                        <input type={!showPassword ? "password" : "text"} id="password" className="login__form-input" />
                        {!showPassword && <img src={HidePassword} className="hidepassword" alt="Hide password icon" onClick={handleShowPassword} />}
                        {showPassword && <img src={ShowPassword} className="showpassword" alt="Show password icon" onClick={handleShowPassword} />}
                    </div>
                    <div className="login__form-checkbox-container"><input type="checkbox" id="remember-me" className="login__form-checkbox" />
                        <label htmlFor="remember-me" className="checkbox-label">Remember Me</label>
                    </div>
                    <button className="login__form-button">Login</button>
            </form>
                
            <p className="login__sign-up">Don't have an account? <span>Sign Up</span></p>
            <p className="login__link">Forgotten Your Password?</p>
            
        </div>
    )
}

export default LoginForm

