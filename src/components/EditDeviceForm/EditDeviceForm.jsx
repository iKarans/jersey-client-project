import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DownArrow from "../../assets/devices/dropdown-downarrow.svg";


import devicesResponse from '../../data/devicesResponse'
import "./EditDeviceForm.scss"

const EditDeviceForm = (props) => {
    const { device } = useParams();

    const filteredDevice = devicesResponse.find(
        (singleDevice) => singleDevice.name === device
        
    );
  

    const brand = () => {
        let brandText = "Unknown";
        let manufacturerToLower = filteredDevice.manufacturer.toLowerCase()
        switch (true) {
            case manufacturerToLower.includes("dell"):
                return brandText = "Dell"
            case manufacturerToLower.includes("apple"):
                return brandText = "Apple"
            case manufacturerToLower.includes("huawei"):
                return brandText = "Huawei"
            case manufacturerToLower.includes("lenovo"):
                return brandText = "Lenovo"
            case manufacturerToLower.includes("samsung"):
                return brandText = "Samsung"
            default:
                return brandText
        }
    };

    const [deviceType, setDeviceType] = useState(filteredDevice.deviceType)
    const [deviceBrand, setDeviceBrand] = useState(brand())
    const [deviceOS, setDeviceOS] = useState(filteredDevice.opSystem)

    const [showDeviceTypes, setShowDeviceTypes] = useState(false)
    const [showDeviceBrands, setShowDeviceBrands] = useState(false)
    const [showDeviceOS, setShowDeviceOS] = useState(false)

    const handleDeviceType = (event) => {
        setDeviceType(event.target.textContent)
        setShowDeviceTypes(!showDeviceTypes)
    }

    const showDeviceTypesJSX = () => {
        setShowDeviceTypes(!showDeviceTypes)
    }

    const handleDeviceBrand = (event) => {
        setDeviceBrand(event.target.textContent)
        setShowDeviceBrands(!showDeviceBrands)
    }

    const showDeviceBrandsJSX = (event) => {
        setShowDeviceBrands(!showDeviceBrands)
    }

    const handleDeviceOS = (event) => {
        setDeviceOS(event.target.textContent)
        setShowDeviceOS(!showDeviceOS)
    }

    const showDeviceOSJSX = (event) => {
        setShowDeviceOS(!showDeviceOS)
    }

    return (
        <form className="edit-device">
            <h2 className="edit-device__header">Edit Device Details</h2>
            <label htmlFor="device-type" className="edit-device__label">Device Type</label>
            <div className="edit-device__select">
                <div className="edit-device__select-current" onClick={showDeviceTypesJSX} >{deviceType} <img src={DownArrow} alt="down arrow" className="edit-device__select-current-arrow" /></div>
                {showDeviceTypes &&
                    <div className="edit-device__select-dropdown">
                        <div className="edit-device__select-dropdown-content" onClick={handleDeviceType}>Laptop</div>
                        <div className="edit-device__select-dropdown-content" onClick={handleDeviceType}>Tablet</div>
                        <div className="edit-device__select-dropdown-content" onClick={handleDeviceType}>Mobile</div>
                        <div className="edit-device__select-dropdown-content" onClick={handleDeviceType}>Desktop</div>
                    </div>
                }
            </div>
            <label htmlFor="device-name" className="edit-device__label">Device Name</label>
            <input type="text" name="device-name" className="edit-device__input" />
            <label htmlFor="brand" className="edit-device__label">Brand</label>
            <div className="edit-device__select">
                <div className="edit-device__select-current" onClick={showDeviceBrandsJSX}>{deviceBrand} <img src={DownArrow} alt="down arrow" className="edit-device__select-current-arrow" /></div>
                {showDeviceBrands && <div className="edit-device__select-dropdown">
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceBrand}>Apple</div>
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceBrand}>Huawei</div>
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceBrand}>Lenovo</div>
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceBrand}>Dell</div>
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceBrand}>Samsung</div>
                </div>}
            </div>
            <label htmlFor="model" className="edit-device__label">Model</label>
            <input type="text" name="model" className="edit-device__input" />
            <label htmlFor="operating-system" className="edit-device__label">Operating System</label>
            <div className="edit-device__select">
                <div className="edit-device__select-current" onClick={showDeviceOSJSX}>{deviceOS}<img src={DownArrow} alt="down arrow" className="edit-device__select-current-arrow" /></div>
                {showDeviceOS && <div className="edit-device__select-dropdown">
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceOS}>Mac OS</div>
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceOS}>Windows 10</div>
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceOS}>Windows 11</div>
                    <div className="edit-device__select-dropdown-content" onClick={handleDeviceOS}>Android 10</div>

                </div>}
            </div>
            <label htmlFor="device-grouping" className="edit-device__label">Device Grouping</label>
            <input type="text" name="device-grouping" className="edit-device__input" />
            <div className="edit-device__buttons">
                <button className="edit-device__buttons-button edit-device__cancel">Cancel</button>
                <button className="edit-device__buttons-button edit-device__save" >Save</button>
            </div>
        </form>
    )
}

export default EditDeviceForm
