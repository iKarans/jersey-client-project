import React from 'react'
import "./CalculationSummary.scss";
import Tick from "../../assets/login/green-tick.svg";
import Cross from "../../assets/login/red-cross.svg";

const CalulationSummary = () => {
    return (
        <div className="container">
            <div className="calculation">
                <h1 className="calculation__header">Calculation Summary</h1>
                <p className="calculation__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi laboriosam asperiores repellat quas dolores excepturi.</p>

                <div className="calculation__container">
                    <div className="calculation__container-items">
                        <img className="calculation__container--image" src={Tick} alt="Green tick"/>
                        <p className="calculation__container--text">Hard drives encrypted</p>
                        <img className="calculation__container--image" src={Tick} alt="Green tick"/>
                        <p className="calculation__container--text">Anti-virus and malware installed</p>
                        <img className="calculation__container--image" src={Tick} alt="Green tick"/>
                        <p className="calculation__container--text">No high risk devices detected on network</p>
                        <img className="calculation__container--image" src={Cross} alt="Red-Cross"/>
                        <p className="calculation__container--text" style={{color: '#F08E8E'}}>No SSL Certificates</p>
                    </div>
                </div>

                <hr/>

                <div className="calculation__button">
                    <button className="calculation__button--refresh">Refresh</button>
                    <button className="calculation__button--more">Find out more</button>
                </div>
            </div>
        </div>
    )
}

export default CalulationSummary
