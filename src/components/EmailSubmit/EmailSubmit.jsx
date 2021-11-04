import React from 'react'
import { Link } from 'react-router-dom'
import "./EmailSubmit.scss"

const EmailSubmit = () => {
  return (
    <div>
      <div classname="successful-submit">
    <div classname="successful-submit__box">
      <h3 classname="successful-submit__header">Successfully sumbitted!</h3>
      <p classname="successful-submit__text">
        You have successfully sumbitted your email, please check for an email
        and follow the link to complete the reset
      </p>
      <p className="successful-submit__text">
        Back to <Link to="/login">Login</Link>
      </p>
    </div>
  </div>
    </div>
  )
}

export default EmailSubmit
