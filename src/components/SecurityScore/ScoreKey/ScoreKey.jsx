import React from 'react'
import "./ScoreKey.scss"

const ScoreKey = () => {
  return (
    <div className="score-key">
      <div className="score-key__cell score-key__cell--red"></div>
      <p className="score-key__cell score-key__cell--score">0 - 199</p>
      <p className="score-key__cell score-key__cell--explain">(Very Poor)</p>

      <div className="score-key__cell score-key__cell--orange"></div>
      <p className="score-key__cell score-key__cell--score">200 - 399</p>
      <p className="score-key__cell score-key__cell--explain">(Poor)</p>

      <div className="score-key__cell score-key__cell--yellow"></div>
      <p className="score-key__cell score-key__cell--score">400 - 599</p>
      <p className="score-key__cell score-key__cell--explain">(Fair)</p>

      <div className="score-key__cell score-key__cell--light-green"></div>
      <p className="score-key__cell score-key__cell--score">600 - 799</p>
      <p className="score-key__cell score-key__cell--explain">(Good)</p>

      <div className="score-key__cell score-key__cell--dark-green"></div>
      <p className="score-key__cell score-key__cell--score">800 - 999</p>
      <p className="score-key__cell score-key__cell--explain">(Excellent)</p>

      
    </div>
  )
}

export default ScoreKey
