import React, { useState } from "react";
import "../components/Home.css";
import triangle from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import GameBoard from "./GameBoard";
import ScoreCard from "./ScoreCard";

function Home({
  rulesCardVisible,
  setRulesCardVisible,
  isGameBoardVisible,
  setIsGameBoardVisible,
}) {
  const [userPicked, setUserPicked] = useState([]);
  const iconArray = [
    {
      id: 1,
      name: "rock",
      iconName: rock,
      className: "rock-div",
      boderColor: " hsl(349, 71%, 52%)",
      height: 80,
      width: 80,
    },
    {
      id: 2,
      name: "paper",
      iconName: paper,
      className: "paper-div",
      boderColor: " hsl(230, 89%, 62%)",
      height: null,
      width: 80,
    },
    {
      id: 3,
      name: "scissors",
      iconName: scissors,
      boderColor: "hsl(39, 89%, 49%)",
      className: "scissor-div",
      height: null,
      width: 80,
    },
  ];
  const [randomPicked, setRandomPicked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState("");
  const [totalScore, setTotalScore] = useState(0);

  const userPickedHandler = (item) => {
    setUserPicked(item);
    const userPickedName = item.name;
    setIsGameBoardVisible(!isGameBoardVisible);

    setTimeout(() => {
      const randomid = Math.floor(Math.random() * 3 + 1);
      setRandomPicked(iconArray[randomid - 1]);
      const randomPickTemp = iconArray[randomid - 1];
      setIsLoading(false);
      winnerCheckHandler(randomPickTemp.name, userPickedName);
    }, 2500);
  };

  const winnerCheckHandler = (randomPickName, userPickedName) => {
    if (randomPickName == "rock") {
      if (userPickedName == "rock") {
        setResult("TRY AGAIN");
      } else if (userPickedName == "scissors") {
        setResult("YOU LOSE");
        setTotalScore(totalScore > 0 ? totalScore - 1 : 0);
      } else {
        setResult("YOU WIN");
        setTotalScore(totalScore + 1);
      }
    } else if (randomPickName == "scissors") {
      if (userPickedName == "scissors") {
        setResult("TRY AGAIN");
      } else if (userPickedName == "rock") {
        setResult("YOU WIN");
        setTotalScore(totalScore + 1);
      } else {
        setResult("YOU LOSE");
        setTotalScore(totalScore > 0 ? totalScore - 1 : 0);
      }
    } else {
      if (userPickedName == "paper") {
        setResult("TRY AGAIN");
      } else if (userPickedName == "rock") {
        setResult("YOU LOSE");
        setTotalScore(totalScore > 0 ? totalScore - 1 : 0);
      } else {
        setResult("YOU WIN");
        setTotalScore(totalScore + 1);
      }
    }
  };
  return (
    <main
      style={{
        pointerEvents: rulesCardVisible && "none",
        opacity: rulesCardVisible && "0.1",
      }}
    >
      <ScoreCard totalScore={totalScore} />
      {isGameBoardVisible == false ? (
        <div className="all-item-svg-card">
          <div className="tringle-div">
            <img src={triangle} alt="" />
          </div>
          {iconArray.map((item) => (
            <div
              key={item.id}
              className={item.className}
              onClick={() => userPickedHandler(item)}
            >
              <img
                src={item.iconName}
                width={item.width}
                height={item.height}
                alt=""
              />
            </div>
          ))}
        </div>
      ) : (
        <GameBoard
          userPicked={userPicked}
          iconArray={iconArray}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          randomPicked={randomPicked}
          isLoading={isLoading}
          result={result}
          isGameBoardVisible-={isGameBoardVisible}
          setIsGameBoardVisible={setIsGameBoardVisible}
          setUserPicked={setUserPicked}
          setRandomPicked={setRandomPicked}
          setIsLoading={setIsLoading}
          setResult={setResult}
        />
      )}

      <div className="rules-button">
        <button onClick={() => setRulesCardVisible(!rulesCardVisible)}>
          RULES
        </button>
      </div>
    </main>
  );
}

export default Home;
