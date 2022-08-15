import classes from "./LevelBar.module.css";

const LevelBar = () => {
  let sliderValue = 20; //basicly 0, kell az előző
  let sliderMax = 100;
  let sliderMin = 0;

  const valueChangeHandler = () => {
    //külső behatás, valami játék véget

    sliderValue = 40;
  };

  return (
    <div className={classes.slidecontainer}>
      <input
        className={classes.slider}
        type="range"
        min={sliderMin}
        max={sliderMax}
        value={sliderValue}
        onChange={valueChangeHandler}
      />
    </div>
  );
};

export default LevelBar;
