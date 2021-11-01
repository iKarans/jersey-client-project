import React from 'react'
import "./CalculationSummary.scss";
import Tick from "../../assets/login/green-tick.svg";
import Cross from "../../assets/login/red-cross.svg";
import RightArrow from "../../assets/global/right-arrow.svg";



const CalulationSummary = (props) => {

    const { showMoreInfo, pillarsArray } = props;

    const itemsJsx = pillarsArray.map(item => {
        if (item.status === true) {
            return (
            <>
            <img className="calculation__items--image" src={Tick} alt="Green tick"/>
            <p className="calculation__items--text">{item.name}</p>
           </>
        )} else {
            return (
            <>
            <img className="calculation__items--image" src={Cross} alt="Red-Cross"/>
            <p className="calculation__items--text" style={{color: '#F08E8E'}}>{item.name}</p>
            </>
        )}
    })
            
            

    

    return (
        
        <div className="calculation">
            <div className="calculation__container">
                <h1 className="calculation__container--header">Calculation Summary</h1>
                <p className="calculation__container--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi laboriosam asperiores repellat quas dolores excepturi.</p>

                <div className="calculation__box">
                    <div className="calculation__items">
                        {itemsJsx}
                    </div>
                </div>

                <hr className="calculation__line"/>

                <div className="calculation__button">
                    <button className="calculation__button--refresh">Refresh</button>
                    <button className="calculation__button--more"onClick={showMoreInfo}>Find out more 
                    <img className="calculation__button--arrow" src={RightArrow} alt="" /></button>
                </div>
            </div>
        </div>
        
    )
}

export default CalulationSummary;
