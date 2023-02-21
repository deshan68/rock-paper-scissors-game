import { useEffect, useState } from "react";
import "./App.css";
import Home from "./assets/components/Home";
import RulesCard from "./assets/components/RulesCard";

function App() {
  const [rulesCardVisible, setRulesCardVisible] = useState(false);
  const [isGameBoardVisible, setIsGameBoardVisible] = useState(false);

  return (
    <div className="App" style={{ position: "relative" }}>
      <Home
        rulesCardVisible={rulesCardVisible}
        setRulesCardVisible={setRulesCardVisible}
        isGameBoardVisible={isGameBoardVisible}
        setIsGameBoardVisible={setIsGameBoardVisible}
      />
      <RulesCard
        rulesCardVisible={rulesCardVisible}
        setRulesCardVisible={setRulesCardVisible}
      />
    </div>
  );
}

export default App;
