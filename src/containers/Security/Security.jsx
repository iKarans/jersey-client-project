import React from 'react'
import "./Security.scss"
import SecurityScore from '../../components/SecurityScore/SecurityScore'
import CalulationSummary from '../../components/CalculationSummary/CalulationSummary'

const Security = () => {
  return (
    <div className="security">
      <SecurityScore />
      <CalulationSummary />
    </div>
  )
}

export default Security
