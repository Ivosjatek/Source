import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import useIsMobile from "../../../hooks/use-mobile";

import classes from "./LapFelcsapas.module.css";

const LapFelcsapas = () => {
  const [gameStarted, setGameStarted] = useState(true);
  const history = useHistory();
  const { width, height, isMobile } = useIsMobile(850);

  const cards = [
    ["Kör", "K", 13],
    ["Kör", "Q", 12],
    ["Kör", "J", 11],
    ["Kör", "10", 10],
    ["Kör", "9", 9],
    ["Kör", "8", 8],
    ["Kör", "7", 7],
    ["Kör", "6", 6],
    ["Kör", "5", 5],
    ["Kör", "4", 4],
    ["Kör", "3", 3],
    ["Kör", "2", 2],
    ["Kör", "A", 14],
    ["Káró", "K", 13],
    ["Káró", "Q", 12],
    ["Káró", "J", 11],
    ["Káró", "10", 10],
    ["Káró", "9", 9],
    ["Káró", "8", 8],
    ["Káró", "7", 7],
    ["Káró", "6", 6],
    ["Káró", "5", 5],
    ["Káró", "4", 4],
    ["Káró", "3", 3],
    ["Káró", "2", 2],
    ["Káró", "A", 14],
    ["Treff", "K", 13],
    ["Treff", "Q", 12],
    ["Treff", "J", 11],
    ["Treff", "10", 10],
    ["Treff", "9", 9],
    ["Treff", "8", 8],
    ["Treff", "7", 7],
    ["Treff", "6", 6],
    ["Treff", "5", 5],
    ["Treff", "4", 4],
    ["Treff", "3", 3],
    ["Treff", "2", 2],
    ["Treff", "A", 14],
    ["Pikk", "K", 13],
    ["Pikk", "Q", 12],
    ["Pikk", "J", 11],
    ["Pikk", "10", 10],
    ["Pikk", "9", 9],
    ["Pikk", "8", 8],
    ["Pikk", "7", 7],
    ["Pikk", "6", 6],
    ["Pikk", "5", 5],
    ["Pikk", "4", 4],
    ["Pikk", "3", 3],
    ["Pikk", "2", 2],
    ["Pikk", "A", 14],
  ];

  let randomChoose1 = Math.floor(Math.random() * cards.length);
  let randomCardPlayer1 = cards[randomChoose1];
  let player1color = randomCardPlayer1[0];
  let player1type = randomCardPlayer1[1];
  let player1amount = randomCardPlayer1[2];

  cards.splice(randomChoose1, 1);

  let randomChoose2 = Math.floor(Math.random() * cards.length);
  let randomCardPlayer2 = cards[randomChoose2];
  let player2color = randomCardPlayer2[0];
  let player2type = randomCardPlayer2[1];
  let player2amount = randomCardPlayer2[2];

  console.log(player1color, player1type, player1amount);
  console.log(player2color, player2type, player2amount);

  const startGameHandler = () => {
    setGameStarted(false);
  };

  const backClickHandler = () => {
    history.push("/menu");
  };

  const okGameHandler = () => {
    history.push("/menu");
  };

  return (
    <div className={classes.bodye}>
      <div
        style={{
          display: gameStarted ? "block" : "none",
          width: width,
          height: height,
        }}
      >
        <Fade>
          <div className={classes.main}>
            <div className={classes.exit}>
              <button onClick={backClickHandler}>X</button>
            </div>
            <p className={classes.title}>Lap felcsapás</p>
            <div className={classes.description}>
              <p className={classes.titleSamiler}>Leírás</p>
              <p>
                Egyszerű játék, az nyer akinek magasabb lapja van. A start
                gombra kattintva mindketten kaptok egy lapot, majd az magától
                átfordul. A kissebb lap vesztett.
              </p>
            </div>
            <div className={classes.startButton}>
              <button onClick={startGameHandler}>Start</button>
            </div>
          </div>
        </Fade>
      </div>
      <div
        style={{
          display: gameStarted ? "none" : "block",
          width: width,
          height: height,
        }}
      >
        <div className={classes.openedCards}>
          <Fade>
            <div className={classes.card1}>
              <p>{player1color}</p>
              <p>{player1type}</p>
            </div>
            <div className={classes.card2}>
              <p>{player2color}</p>
              <p>{player2type}</p>
            </div>
            <div className={classes.okButton}>
              <button onClick={okGameHandler}>Ok</button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default LapFelcsapas;
