import React from 'react'
import "./Security.scss"
import SecurityScore from '../../components/SecurityScore/SecurityScore'
import CalculationSummary from '../../components/CalculationSummary/CalulationSummary'
import CalculationInfo from '../../components/CalculationInfo/CalculationInfo'
import NetworkAlert from "../../components/SecurityBar/NetworkAlert/NetworkAlert"
import greenTick from "../../assets/login/green-tick.svg";
import { useState } from 'react'

const Security = (props) => {

    const { alertImg, alertText, atRisk } = props;

  const [moreInfo, setMoreInfo] = useState(false)

    const showMoreInfo = () => {
        setMoreInfo(!moreInfo);
      };

  const calculationSummaryStatus = [{

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
        <div className="network-alert-show">
            <NetworkAlert
            alertImg={greenTick}
            alertText="Your network is secure. Great work!"
            atRisk={false} />
        </div>
      <SecurityScore />
      <CalculationSummary calculationSummaryStatus={calculationSummaryStatus} showMoreInfo={showMoreInfo}/>
      {moreInfo && <CalculationInfo  showMoreInfo={showMoreInfo}/>}
    </div>
  )
}

export default Security
