import React from 'react'
import ChatIcon from "../../assets/global/chat-icon.svg"

import "./ChatButton.scss"

const ChatButton = () => {
    return (  
        <div className="chat-button">
            <img src={ChatIcon} alt="chat icon" className="chat-button__icon" />
        </div>
    )
}

export default ChatButton
