import React from "react";
import "./SecurityScore.scss";
import infoIcon from "../../assets/global/info-icon.svg";
import ScoreKey from "./ScoreKey/ScoreKey";


const SecurityScore = () => {
  return (
    <article className="security-score">
      <div className="security-score__key">
        <h2 className="security-score__key--header">Security Score</h2>
        <img className="security-score__key--icon" src={infoIcon} alt="info icon" />
        <div className="security-score__key--grid">
          <ScoreKey />

        </div>
      </div>
    </article>
  );
};

export default SecurityScore;
