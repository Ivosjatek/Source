import classes from "./GameCard.module.css";

const GameCard = (props) => {
  if (props.type === "kor") {
    return (
      <div className={classes.card}>
        <div className={classes.emblemLeft}>
          <div>{props.number}</div>
        </div>
        <div className={classes.type}>
          <div className={classes.kor}>
            <div className={classes.korRightHalf}></div>
            <div className={classes.korLeftHalf}></div>
          </div>
        </div>
        <div className={classes.emblemRight}>
          <div>{props.number}</div>
        </div>
      </div>
    );
  }
  if (props.type === "karo") {
    return (
      <div className={classes.card}>
        <div className={classes.emblemLeft}>
          <div>{props.number}</div>
        </div>
        <div className={classes.type}>
          <div className={classes.karo}>
            <div className={classes.cubeRotate}>
              <div className={classes.cube}></div>
            </div>
          </div>
        </div>
        <div className={classes.emblemRight}>
          <div>{props.number}</div>
        </div>
      </div>
    );
  }
  if (props.type === "treff") {
    return (
      <div className={classes.card}>
        <div className={classes.emblemLeft}>
          <div>{props.number}</div>
        </div>
        <div className={classes.type}>
          <div className={classes.treff}>
            <div className={classes.stem2}></div>
            <div className={classes.ballTreff1}></div>
            <div className={classes.ballTreff2}></div>
            <div className={classes.ballTreff3}></div>
            <div className={classes.ballTreff4}></div>
          </div>
        </div>
        <div className={classes.emblemRight}>
          <div>{props.number}</div>
        </div>
      </div>
    );
  }
  if (props.type === "pikk") {
    return (
      <div className={classes.card}>
        <div className={classes.emblemLeft}>
          <div>{props.number}</div>
        </div>
        <div className={classes.type}>
          <div className={classes.pikk}>
            <div className={classes.stem}></div>
            <div className={classes.middleHide}></div>
            <div className={classes.ballLeft}></div>
            <div className={classes.top}></div>
            <div className={classes.ballRight}></div>
          </div>
        </div>
        <div className={classes.emblemRight}>
          <div>{props.number}</div>
        </div>
      </div>
    );
  }

  console.log(props.type, typeof props.type);
};

export default GameCard;
