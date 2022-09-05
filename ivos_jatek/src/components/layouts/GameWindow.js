import { useState } from "react";

import classes from "./GameWindow.module.css";

import exitimg from "../../images/close-icon.svg";

const GameWindow = (
  gameTitle,
  gameDescription,
  gameRules,
  correctSettings,
  xp
) => {
  const [gameTitleIsExsist, setGameTitleIsExsist] = useState(false);
  const [gameDescriptionIsExsist, setGameDescriptionIsExsist] = useState(false);
  const [gameRulesIsExsist, setGameRulesIsExsist] = useState(false);
  const [correctSettingsIsExsist, setCorrectSettingsIsExsist] = useState(false);

  if (gameTitle.length > 0) {
    setGameTitleIsExsist(true);
  }

  if (gameDescription.length > 0) {
    setGameDescriptionIsExsist(true);
  }

  if (gameRules.length > 0) {
    setGameRulesIsExsist(true);
  }

  if (correctSettings.length > 0) {
    setCorrectSettingsIsExsist(true);
  }

  let pluszXp = (xp = 100); //any plusz experience

  return (
    <div className={classes.window}>
      <div className={classes.exit}>
        <img src={exitimg} alt="exit"></img>
      </div>
      {gameTitleIsExsist ? <h3>{gameTitle}</h3> : ""}
      {gameDescriptionIsExsist ? <p>{gameDescription}</p> : ""}
      {gameRulesIsExsist ? <p>{gameRules}</p> : ""}
      {correctSettingsIsExsist ? <p>{correctSettings}</p> : ""}
      <button>Start</button>
    </div>
  );
};

export default GameWindow;
