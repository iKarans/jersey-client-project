import React from "react";
import "./SecurityScore.scss";
import infoIcon from "../../assets/global/info-icon.svg";
import ScoreKey from "./ScoreKey/ScoreKey";
import SecurityScoreChart from "./SecurityScoreChart/SecurityScoreChart";
import { users } from "../../data/users";


const SecurityScore = () => {
  const userScore = users[2].score;
  return (
    <article className="security-score">
      <div className="security-score__key">
        <h2 className="security-score__key--header">Security Score</h2>
        <img className="security-score__key--icon" src={infoIcon} alt="info icon" />
        <div className="security-score__key--grid">
          <ScoreKey />
        </div>
        <div className="security-score__chart">
          <SecurityScoreChart userScore={userScore}/>
        </div>
      </div>
    </article>
  );
};

export default SecurityScore;
