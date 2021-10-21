import React from "react";
import "./SecurityScore.scss";
import infoIcon from "../../assets/global/info-icon.svg";
import ScoreKey from "./ScoreKey/ScoreKey";
import SecurityScoreChart from "./SecurityScoreChart/SecurityScoreChart";
import { users } from "../../data/users";


const SecurityScore = () => {
  const userScore = users[0].score;
  return (
    <article className="security-score">
      <div className="security-score__key">
        <div className="security-score__key--title">
          <h3 className="security-score__key--header">Security Score</h3>
          <img className="security-score__key--icon" src={infoIcon} alt="info icon" />

        </div>
        <p className="security-score__key--info">The security score assesess the overall security of your network, depending on a number of factors. For more information, look at the summary section.</p>
        <div className="security-score__key--grid">
          <ScoreKey />
        </div>
      </div>  
      <div className="security-score__chart">
        <SecurityScoreChart userScore={userScore}/>
        <div className="security-score__chart--score">
          <h1>{userScore}</h1>
          
          <p>/ 999</p>
        
        </div>
      </div>

      
    </article>
  );
};

export default SecurityScore;
