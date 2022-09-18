import FelelszVagyMersz from "./FelelszVagyMersz";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useIsMobile from "../../../hooks/use-mobile";

import classes from "./FVMGame.module.css";

const FVMGame = () => {
  const [game, setGame] = useState(true);
  const [descr, setDescr] = useState(true);
  const history = useHistory();
  const { width, height, isMobile } = useIsMobile(850);

  let difficulty = "easy";

  const okCkilckHandler = () => {
    setGame(!game);
    if (document.getElementById("easy").checked) {
      difficulty = "easy";
    } else if (document.getElementById("medium").checked) {
      difficulty = "medium";
    } else {
      difficulty = "hard";
    }
  };

  const exitClickHandler = () => {
    history.push("/menu");
  };

  const descOpenHandler = () => {
    setDescr(!descr);
  };

  return (
    <div className={classes.back} style={{ width: width, height: height }}>
      <div style={{ display: game ? "block" : "none" }}>
        <div>
          <button className={classes.exit} onClick={exitClickHandler}>
            X
          </button>
        </div>
        <div>
          <div className={classes.title}>
            <h2>Felelsz vagy mersz?</h2>
          </div>
          <div className={classes.rules}>
            <h3>Szabályok</h3>
            Ha valaki hazudik, "Büntetés". <br />
            Ha nem csinálod meg a büntetést kiestél.
          </div>
          <div className={classes.description}>
            <h3 onClick={descOpenHandler}>Leírás</h3>
            <p style={{ display: descr ? "none" : "block" }}>
              Az óra járásával megegyezően valaki felhúz egy kártyát a pakliból
              és akit szeretne attól megkérdezi hogy "felelsz vagy mersz?".
              <br />
              Ha választott fél azt mondja hogy felel, akkor a "Felelsz" részt
              kell felolvasni.
              <br /> Ha azt mondja hogy "mer", akkor a "Mersz" részt kell.
              Miután felolvastad, kiválasztottnak őszintén válaszolni kell, vagy
              meg kell tennie azt ami a kártyára van írva. <br />
              Ha nem teszi meg akkor a kártya alján lévő "Büntetés"-t végre kell
              hajtani. Ha pedig valaki úgy véli hogy hazudott a válaszoló akkor
              felszólalhat és vita kezdődik. A vita vesztese hajtja végre a
              "Büntetés"-t.
            </p>
          </div>
          <div className={classes.formate}>
            <p>Nehézségi szint</p>
            <form>
              <input type="radio" value="easy" id="easy" name="checked" />
              <label htmlFor="easy">Easy</label>
              <input type="radio" value="medium" id="medium" name="checked" />
              <label htmlFor="medium">Medium</label>
              <input type="radio" value="hard" id="hard" name="checked" />
              <label htmlFor="hard">Hard</label>
            </form>
            <div className={classes.ok}>
              <button onClick={okCkilckHandler}>Ok</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: game ? "none" : "block" }}>
        <FelelszVagyMersz difficulty={difficulty} />
      </div>
    </div>
  );
};

export default FVMGame;
