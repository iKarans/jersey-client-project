import React from 'react'
import "./Security.scss"
// import SecurityScore from '../../components/SecurityScore/SecurityScore'
import CalulationSummary from '../../components/CalculationSummary/CalulationSummary'
import CalculationInfo from '../../components/CalculationInfo/CalculationInfo'

const Security = () => {
  return (
    <div className="security">
      {/* <SecurityScore /> */}
      <CalulationSummary />
      <CalculationInfo />

    </div>
  )
}

export default Security
