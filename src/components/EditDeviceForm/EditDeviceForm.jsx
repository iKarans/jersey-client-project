import React from 'react'

import "./EditDeviceForm.scss"

const EditDeviceForm = () => {


    return (
        <form className="edit-device">
            <h2 className="edit-device__header">Edit Device Details</h2>
            <label htmlFor="device-type" className="edit-device__label">Device Type</label>
            <div className="edit-device__select">
                <div className="edit-device__select-current" value="desktop">Desktop</div>
                <div className="edit-device__select-dropdown">
                    <div className="edit-device__select-dropdown-content" value="laptop">Laptop</div>
                    <div className="edit-device__select-dropdown-content" value="tablet">Tablet</div>
                    <div className="edit-device__select-dropdown-content" value="mobile">Mobile</div>
                </div>

            </div>
            <label htmlFor="device-name" className="edit-device__label">Device Name</label>
            <input type="text" name="device-name" className="edit-device__input" />
            <label htmlFor="brand" className="edit-device__label">Brand</label>
            <select name="brand" id="brand" className="edit-device__select">
                <option value="apple">Apple</option>
                <option value="huawei">Huawei</option>
                <option value="lenovo">Lenovo</option>
                <option value="dell">Dell</option>
                <option value="samsung">Samsung</option>
            </select>
            <label htmlFor="model" className="edit-device__label">Model</label>
            <input type="text" name="model" className="edit-device__input" />
            <label htmlFor="operating-system" className="edit-device__label">Operating System</label>
            <select name="operating-system" id="operating-system" className="edit-device__select">
                <option value="mac OS">Mac OS</option>
                <option value="windows10">Windows 10</option>
                <option value="windows11">Windows 11</option>
                <option value="android10">Android 10</option>
            </select>
            <div className="edit-device__buttons">
                <button className="edit-device__buttons-button edit-device__cancel">Cancel</button>
                <button className="edit-device__buttons-button edit-device__save" >Save</button>
            </div>
        </form>
    )
}

export default EditDeviceForm
