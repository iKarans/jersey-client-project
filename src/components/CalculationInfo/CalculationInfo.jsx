import React from 'react';
import "./CalculationInfo.scss";
import Cross from "../../assets/global/black-cross.svg";

const CalculationInfo = (props) => {

const { showMoreInfo } = props;
    

    return (
        <div className="calculation-info">
            <div className="calculation-info__holder">
                <div className="calculation-info__content">
                    <img className="calculation-info__content--image" src={Cross} alt="Cross" onClick={showMoreInfo}></img>
                    <p className="calculation-info__content--sub-title" style={{color: '#2abca1'}}>Calculation Summary</p>
                    <h1 className="calculation-info__content--title">How it works?</h1>   
                    <p className="calculation-info__content--text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis esse soluta necessitatibus quidem laborum tenetur perferendis architecto deleniti excepturi cum, laudantium itaque cumque minus voluptate inventore optio delectus alias.</p>
                    <p className="calculation-info__content--text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis esse soluta necessitatibus quidem laborum tenetur perferendis architecto deleniti excepturi cum, laudantium itaque cumque minus voluptate inventore optio delectus alias.</p>
                    <p className="calculation-info__content--text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis esse soluta necessitatibus quidem laborum tenetur perferendis architecto deleniti excepturi cum, laudantium itaque cumque minus voluptate inventore optio delectus alias.</p>
                    
                    <hr className="calculation-info__content--line"/>

                    <button className="calculation-info__button" onClick={showMoreInfo}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default CalculationInfo;
