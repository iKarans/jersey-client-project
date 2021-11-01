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

  const pillarsArray = [{

    name: "Boundary Firewalls",
    status: true
  },
  
  {
    name: "Software Updates",
    status: false
  },
  
  {
    name: "Anti virus",
    status: true
  },

  {
    name: "Secure Configuration",
    status: true
  },

  {
    name: "Access Control",
    status: false
  }
]    

  return (
    <div className="security">
      <SecurityScore />
      <CalulationSummary pillarsArray={pillarsArray} showMoreInfo={showMoreInfo}/>
      {moreInfo && <CalculationInfo  showMoreInfo={showMoreInfo}/>}
      

    </div>
  )
}

export default Security
