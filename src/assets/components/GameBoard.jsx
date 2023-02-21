import React, { useEffect, useState } from "react";
import "../components/gameboard.css";
import { Sentry } from "react-activity";
import "react-activity/dist/library.css";

function GameBoard({
  userPicked,
  setIsGameBoardVisible,
  randomPicked,
  isLoading,
  result,
  setUserPicked,
  setRandomPicked,
  setIsLoading,
  setResult,
}) {
  const playAgainHandler = () => {
    setIsGameBoardVisible(false);
    setUserPicked("");
    setRandomPicked("");
    setIsLoading(true);
    setResult("");
  };
  return (
    <div className="gameboard-main-div">
      <div className="picked-title">
        <p>YOU PICKED</p>
        <div
          className="you-picked-div"
          style={{
            borderColor: userPicked.boderColor,
            animation: result == "YOU WIN" ? "myMove 3s infinite" : "",
          }}
        >
          <img
            src={userPicked.iconName}
            width={userPicked.width}
            height={userPicked.height}
            alt=""
          />
        </div>
      </div>
      <div className="result-div">
        <span className="result-title">{result}</span>
        <button className="playagain-button" onClick={playAgainHandler}>
          PLAY AGAIN
        </button>
      </div>
      <div className="picked-title">
        <p>THE HOUSE PICKED</p>
        <div
          className="house-picked-div"
          style={{
            borderColor: randomPicked?.boderColor,
            backgroundColor: isLoading == true ? "hsl(229, 25%, 31%)" : "white",
            animation: result == "YOU LOSE" ? "myMove 3s infinite" : "",
          }}
        >
          {isLoading ? (
            <Sentry color="white" size={35} />
          ) : (
            <img
              src={randomPicked?.iconName}
              width={randomPicked?.width}
              height={randomPicked?.height}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
