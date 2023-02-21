import "../components/RulesCard.css";
import rules from "../images/image-rules.svg";
import close from "../images/icon-close.svg";

function RulesCard({ rulesCardVisible, setRulesCardVisible }) {
  return (
    <div
      className="main-div-rules-card"
      style={{
        visibility: rulesCardVisible && "visible",
        animationName: rulesCardVisible && " example",
        animationDuration: rulesCardVisible && "1s",
      }}
    >
      <div className="rules-title-icon">
        <span className="rules-title">RULES</span>
        <img
          onClick={() => {
            setRulesCardVisible(!rulesCardVisible);
          }}
          className="close-icon"
          src={close}
          alt=""
        />
      </div>
      <div className="rules-img">
        <img src={rules} width={350} alt="" />
      </div>
    </div>
  );
}

export default RulesCard;
