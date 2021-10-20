import React from 'react'

import "./NetworkPageButton.scss"

const NetworkPageButton = (props) => {

    const index = "0";

    const className = "network-alerts__pages-buttons-button"

    return (
        <button className={className}>{index}</button>
    )
}

export default NetworkPageButton
