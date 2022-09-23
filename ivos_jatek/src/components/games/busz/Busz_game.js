import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import useIsMobile from "../../../hooks/use-mobile";

import classes from "./Busz_game.module.css";

const Busz_game = () => {
  let player_number = 4;
  const [showCards, setShowCards] = useState(false);
  const [rotate, setRotate] = useState(false);
  const { width, height, isMobile } = useIsMobile(850);

  const showCardsHandler = () => {
    setShowCards(!showCards);
  };

  const rotateHandler = () => {
    setRotate(!rotate);
  };

  const cardOneShowUp = () => {};
  const cardSecondShowUp = () => {};
  const cardThirdShowUp = () => {};
  const cardFourthShowUp = () => {};

  return (
    <div className={classes.bodye} style={{ width: width, height: height }}>
      <div className={classes.pyramid}>
        <div>Fist Line</div>
        <div>Second Line</div>
        <div>Third Line</div>
        <div>Fourth Line</div>
      </div>
      <div className={classes.myCards}>
        <div>
          <div className={classes.cardOpen} onClick={showCardsHandler}>
            <img
              src="./images/arrow.svg"
              alt="arrow"
              onClick={rotateHandler}
              style={{
                width: "40px",
                height: "40px",
                transform: rotate ? "rotateY(180deg)" : "rotateY(180deg)",
              }}
            />
          </div>
          <div
            className={classes.slideUpCards}
            style={{ display: showCards ? "block" : "none", width: width }}
          >
            <Fade duration={2500}>
              <div className={classes.cardBackOne} onClick={cardOneShowUp}>
                Card1_back - Card1_front
              </div>
              <div className={classes.cardBackTwo} onClick={cardSecondShowUp}>
                Card2_back - Card2_front
              </div>
              <div className={classes.cardBackThree} onClick={cardThirdShowUp}>
                Card3_back - Card3_front
              </div>
              <div className={classes.cardBackFour} onClick={cardFourthShowUp}>
                Card4_back - Card4_front
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className={classes.playerTwo}>
        <div>Card1_back, Card2_back, Card3_back, Card4_back</div>
      </div>
      <div
        className={classes.playerThree}
        style={{ display: player_number >= 3 ? "block" : "none" }}
      >
        <div>Card1_back, Card2_back, Card3_back, Card4_back</div>
      </div>
      <div
        className={classes.playerFour}
        style={{ display: player_number == 4 ? "block" : "none" }}
      >
        <div>Card1_back, Card2_back, Card3_back, Card4_back</div>
      </div>
    </div>
  );
};

export default Busz_game;
