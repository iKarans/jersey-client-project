import React from 'react'
import "./HighRisk.scss";
import highRiskWhite from "../../../assets/header/high-risk-white.svg";

const HighRisk = () => {
  return (
    <div className="high-risk">
      <div className="high-risk__icon">
        <img className="high-risk__icon--svg" src={highRiskWhite} alt="high risk" />
      </div>
      <div className="high-risk__info">
        <p className="high-risk__info--heading">
          High Risk Devices
        </p>
        <p className="high-risk__info--number">
          4
        </p>
      </div>  
    </div>
  )
}

export default HighRisk
