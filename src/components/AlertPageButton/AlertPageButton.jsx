import React from 'react'

import "./AlertPageButton.scss"

const AlertPageButton = (props) => {

    const {index, setPages, pages} = props;

    let className;

    if(pages === index - 1) {
        className = "alert-alerts__pages-buttons-button alert__button-active"
    } else {
        className = "alert-alerts__pages-buttons-button"
    }
    

    return (
        <button className={className} onClick={() => setPages(index - 1)}>{index}</button>
    )
}

export default AlertPageButton
