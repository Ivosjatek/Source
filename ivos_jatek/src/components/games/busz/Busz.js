import { useState, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import useIsMobile from "../../../hooks/use-mobile";

import classes from "./Busz.module.css";

import bus from "../../../images/bus-side-view-icon.svg";

const Busz = () => {
  const [fomrIsValid, setFormIsValid] = useState(true);
  const [day, setDay] = useState(true);
  const [night, setNight] = useState(false);
  const [isOpneDescription, setIsOpenDescription] = useState(false);
  const [isOpneRules, setIsOpenRules] = useState(false);
  const numberInputRef = useRef();
  const history = useHistory();
  const { width, height, isMobile } = useIsMobile(850);

  let mod;

  useEffect(() => {
    console.log(width, height, isMobile);
  }, [width]);

  const dayClickHandler = () => {
    setDay(true);
    setNight(false);
  };

  const nightClickHandler = () => {
    setDay(false);
    setNight(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNumberRef = numberInputRef.current.value;

    if (enteredNumberRef > 4 || enteredNumberRef < 2) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
      if (day === true) {
        mod = "day";
      } else {
        mod = "night";
      }
      console.log("Game has been started!", enteredNumberRef, mod);
    }
  };

  const descriptionOpenHandler = () => {
    setIsOpenDescription(!isOpneDescription);
  };

  const rulesOpenHandler = () => {
    setIsOpenRules(!isOpneRules);
  };

  const backClickHandler = () => {
    history.push("/menu");
  };

  const busClickHandler = () => toast("Csú Csú", { icon: "🚌 🚍" });
  return (
    <div className={classes.bodye} style={{ height: height }}>
      <div className={classes.maine}>
        <div className={classes.exit}>
          <button onClick={backClickHandler}>X</button>
        </div>
        <p className={classes.title}>Buszozás</p>

        <div onClick={descriptionOpenHandler} className={classes.description}>
          Leírás
        </div>
        <div style={{ display: isOpneDescription ? "block" : "none" }}>
          <Fade>
            <p>
              Kezdetben mindenkinél van 4 kártya, 1x meg lehet nézni mi az,
              utána meg kell jegyezni. Ha a piramisból olyan kártyát kerül
              felfordításra, ami neked van, emlkéezeted szerint fel kell
              fordítanod a korrekt kártyát. Ha nem a jó kártyát fordítod fel,
              azaz az azonosat, akkor te iszol. Ha viszont jór fordítasz fel
              akkor te mondod meg ki ígyon. Szét is lehet persze osztani.
            </p>
            <p>
              Mikor véget ér a piramis, megnézzük ki előtt maradt a legtöbb.
              Előfordulhat hogy több embernek ugyanannyi, ilyenkor adunk
              mindenkinek egy random lapot, akié a legkisebb az vesztett.
            </p>
            <p>
              A vesztessel kezdődik a buszozás, neki az a feladata hogy
              "kiszálljon a buszból". Ha elsőre "kiszáll" mindenki más iszik
              rajta kívül.
            </p>
            <p>
              Úgy kell kiszállni a buszból hogy végig mész a soron hibátlanul.
              Minden hiba esetén előlről kezdjük és ameddig eljutott annyit
              iszik. A feladat pedig csak annyi, hogy megmondjuk, ami lap
              következik, alatta vagy felette lesz az asztalon lévőnek.
            </p>
          </Fade>
        </div>
        <div style={{ display: isOpneDescription ? "none" : "block" }}>
          <div className={classes.ruleTitle} onClick={rulesOpenHandler}>
            <p>Szabályok</p>
          </div>
          <div
            className={classes.rule}
            style={{ display: isOpneRules ? "block" : "none" }}
          >
            <Fade>
              <p>Ha valaki azt mondja iszol, iszol!</p>
            </Fade>
          </div>
          <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="playerNumber">Játékosok száma: </label>
            <input
              type="number"
              ref={numberInputRef}
              name="playerNumber"
            ></input>
            <br />
            <label htmlFor="mod">Nehézség/ mód: </label>
            <input
              type="radio"
              name="mod"
              onClick={dayClickHandler}
              defaultChecked="true"
            ></input>
            <label htmlFor="mod">Day</label>
            <input type="radio" name="mod" onClick={nightClickHandler}></input>
            <label htmlFor="mod">Night</label>
            <br />

            {!fomrIsValid && (
              <p className={classes.error}>
                Játékosok száma maximum 4, legkevesebb 2.
              </p>
            )}
            <div className={classes.button}>
              <button>Start</button>
            </div>
          </form>
          <div className={classes.kep} onClick={busClickHandler}>
            <img src={bus} alt="bus"></img>
            <Toaster position="bottom-center" reverseOrder={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Busz;
