import React from "react";

function ScoreCard({ totalScore }) {
  return (
    <div className="titile-with-score-card">
      <div className="title">
        ROCK <br />
        PAPER <br />
        SCISSORS
      </div>
      <div className="score-board">
        <span className="score-title">SCORE</span>
        <span className="score">{totalScore}</span>
      </div>
    </div>
  );
}

export default ScoreCard;
