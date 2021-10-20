import React from 'react'

import "./NetworkPageButton.scss"

const NetworkPageButton = (props) => {

    const {index, setPages} = props;
    
    const className = "network-alerts__pages-buttons-button"

    return (
        <button className={className} onClick={() => setPages(index - 1)}>{index}</button>
    )
}

export default NetworkPageButton
