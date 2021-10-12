import React from 'react'
import alertIcon from "../../../assets/header/alert-icon.svg"
import "./Alerts.scss"

const Alerts = () => {
  return (
    <div className="alerts">
      <div className="alerts__icon">
        <img className="alerts__icon--svg" src={alertIcon} alt="alerts" />
      </div>
      <div className="alerts__info">
        <p className="alerts__info--heading">
          Alerts
        </p>
        <p className="alerts__info--number">
          63
        </p>
      </div>
      
    </div>
  )
}

export default Alerts
