import React from 'react'
import ChatIcon from "../../assets/global/chat-icon.svg"

import "./ChatButton.scss"

const ChatButton = () => {
    return (  
        <div className="chat__button">
            <img src={ChatIcon} alt="chat icon" className="chat__button--icon" />
        </div>
    )
}

export default ChatButton
