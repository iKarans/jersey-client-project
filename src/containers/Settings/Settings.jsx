import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import EditDeviceForm from '../../components/EditDeviceForm/EditDeviceForm'

import devicesResponse from '../../data/devicesResponse'
import "./Settings.scss"

const Settings = () => {
  const { device } = useParams();
  const [thisDevice, setThisDevice] = useState(null)

  console.log(device)
  
  const filteredDevice = devicesResponse.find(
    (singleDevice) => singleDevice.name === device
  );

 
  console.log(filteredDevice)
  return (
    <div className="settings__text">
      {thisDevice && <EditDeviceForm device={thisDevice} />}
    </div>
  )
}

export default Settings