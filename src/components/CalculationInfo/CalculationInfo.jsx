import React from 'react'
import "./CalculationInfo.scss";
import Cross from "../../assets/global/black-cross.svg";

const CalculationInfo = (props) => {

const { showMoreInfo } = props;
    

    return (
        <div className="background">
        <div className="holder">
            <div className="content">
                <img className="content__image" src={Cross} alt="Cross" onClick={showMoreInfo}></img>
                <p className="content__sub" style={{color: '#2abca1'}}>Calculation Summary</p>
                <h1 className="content__title">How it works?</h1>   
                <p className="content__text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis esse soluta necessitatibus quidem laborum tenetur perferendis architecto deleniti excepturi cum, laudantium itaque cumque minus voluptate inventore optio delectus alias.</p>
                <p className="content__text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis esse soluta necessitatibus quidem laborum tenetur perferendis architecto deleniti excepturi cum, laudantium itaque cumque minus voluptate inventore optio delectus alias.</p>
                <p className="content__text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis esse soluta necessitatibus quidem laborum tenetur perferendis architecto deleniti excepturi cum, laudantium itaque cumque minus voluptate inventore optio delectus alias.</p>
                
                <hr className="content__line"/>

                <button className="content__button" onClick={showMoreInfo}>Go Back</button>
            </div>
        </div>
        </div>
    )
}

export default CalculationInfo
