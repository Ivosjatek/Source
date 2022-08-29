import classes from "./LevelBar.module.css";

const LevelBar = () => {
  const getLevel = () => {
    //fetch database, get level
  };

  const lvlStyle = { width: "" + 90 + "%" };

  return (
    <div className={classes.lvlInterface}>
      <div className={classes.maxLevelBar}>
        <div className={classes.levelSlider} style={lvlStyle}></div>
      </div>
    </div>
  );
};

export default LevelBar;
