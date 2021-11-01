import React from 'react'
import "./Security.scss"
import SecurityScore from '../../components/SecurityScore/SecurityScore'
import CalulationSummary from '../../components/CalculationSummary/CalulationSummary'
import CalculationInfo from '../../components/CalculationInfo/CalculationInfo'
import { useState } from 'react'

const Security = () => {

  const [moreInfo, setMoreInfo] = useState(false)

    const showMoreInfo = () => {
        setMoreInfo(!moreInfo);
      };

  return (
    <div className="security">
      <SecurityScore />
      <CalulationSummary showMoreInfo={showMoreInfo}/>
      {moreInfo && <CalculationInfo  showMoreInfo={showMoreInfo}/>}
      

    </div>
  )
}

export default Security
