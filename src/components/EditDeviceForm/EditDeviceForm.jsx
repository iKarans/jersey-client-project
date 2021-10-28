import React from 'react'

import DownArrow from "../../assets/devices/dropdown-downarrow.svg";

import "./EditDeviceForm.scss"

const EditDeviceForm = () => {


    return (
        <form className="edit-device">
            <h2 className="edit-device__header">Edit Device Details</h2>
            <label htmlFor="device-type" className="edit-device__label">Device Type</label>
            <div className="edit-device__select">
                <div className="edit-device__select-current" value="desktop">Desktop <img src={DownArrow} alt="down arrow" className="edit-device__select-current-arrow" /></div>
                <div className="edit-device__select-dropdown">
                    <div className="edit-device__select-dropdown-content" value="laptop">Laptop</div>
                    <div className="edit-device__select-dropdown-content" value="tablet">Tablet</div>
                    <div className="edit-device__select-dropdown-content" value="mobile">Mobile</div>
                    <div className="edit-device__select-dropdown-content" value="desktop">Desktop</div>
                </div>
            </div>
            <label htmlFor="device-name" className="edit-device__label">Device Name</label>
            <input type="text" name="device-name" className="edit-device__input" />
            <label htmlFor="brand" className="edit-device__label">Brand</label>
            <div className="edit-device__select">
                <div className="edit-device__select-current" value="desktop">Apple <img src={DownArrow} alt="down arrow" className="edit-device__select-current-arrow" /></div>
                <div className="edit-device__select-dropdown">
                    <div className="edit-device__select-dropdown-content" value="apple">Apple</div>
                    <div className="edit-device__select-dropdown-content" value="huawei">Huawei</div>
                    <div className="edit-device__select-dropdown-content" value="lenovo">Lenovo</div>
                    <div className="edit-device__select-dropdown-content" value="dell">Dell</div>
                    <div className="edit-device__select-dropdown-content" value="samsung">Samsung</div>
                </div>
            </div>
            <label htmlFor="model" className="edit-device__label">Model</label>
            <input type="text" name="model" className="edit-device__input" />
            <label htmlFor="operating-system" className="edit-device__label">Operating System</label>
            <div className="edit-device__select">
                <div className="edit-device__select-current" value="desktop">Mac OS Catalina <img src={DownArrow} alt="down arrow" className="edit-device__select-current-arrow" /></div>
                <div className="edit-device__select-dropdown">
                    <div className="edit-device__select-dropdown-content" value="mac OS">Mac OS</div>
                    <div className="edit-device__select-dropdown-content" value="windows10">Windows 10</div>
                    <div className="edit-device__select-dropdown-content" value="windows11">Windows 11</div>
                    <div className="edit-device__select-dropdown-content" value="android10">Android 10</div>
                    
                </div>
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
