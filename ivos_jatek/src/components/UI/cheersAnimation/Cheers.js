import { useEffect, useRef } from "react";
import { Zoom } from "react-awesome-reveal";
import classes from "./Cheers.module.css";

function Cheeres() {
  const cheersSound = new Audio("./sounds/cheers.mp3");
  setTimeout(() => {
    cheersSound.play();
  }, 1000);

  return (
    <div className={classes.chers_animation_box}>
      <div className={classes.cheers_logo}>
        <Zoom triggerOnce duration={1000} delay={1000}>
          <img
            src={"./images/cheers.png"}
            alt="beer hand"
            className={classes.cheers_title}
          />
        </Zoom>
      </div>
      <div className={classes.cheers_hands}>
        <img
          src={"./images/beer_hand.png"}
          alt="beer hand"
          className={classes.cheers_hand_left}
        />
        <img
          src={"./images/beer_hand.png"}
          alt="beer hand"
          className={classes.cheers_hand_right}
        />
      </div>
    </div>
  );
}

export default Cheeres;
