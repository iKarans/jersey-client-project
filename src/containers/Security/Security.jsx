import React from 'react'
import "./Security.scss"
import SecurityScore from '../../components/SecurityScore/SecurityScore'
import CalculationSummary from '../../components/CalculationSummary/CalculationSummary'
import CalculationInfo from '../../components/CalculationInfo/CalculationInfo'
import DeviceList from "../DeviceList/DeviceList";
import NetworkAlert from "../../components/SecurityBar/NetworkAlert/NetworkAlert"
import greenTick from "../../assets/login/green-tick.svg"

import { useState } from 'react'

const Security = () => {

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
      <div className="security__score-summary">
        <SecurityScore />
        <CalculationSummary calculationSummaryStatus={calculationSummaryStatus} showMoreInfo={showMoreInfo}/>
        {moreInfo && <CalculationInfo  showMoreInfo={showMoreInfo}/>}
      </div>

      <div className="security__devices--list">
        <h3 className="security__devices--list-header">Device List</h3>
        <p className="security__devices--list-text">Please use the device list below to quickly find devices that are posing a high risk to the network. You can then select the device and block it to boost up your security score and minimise the risk of cyber attacks to the network. </p>
        <DeviceList />
      </div>

    </div>
  )
}

export default Security
