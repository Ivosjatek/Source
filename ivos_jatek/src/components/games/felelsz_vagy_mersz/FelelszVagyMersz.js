import { useState } from "react";
import useIsMobile from "../../../hooks/use-mobile";
import { useHistory } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import classes from "./FelelszVagyMersz.module.css";

const FelelszVagyMersz = (difficulty) => {
  const [cardIsReaded, setCardIsReaded] = useState(false);
  const history = useHistory();
  const { width, height, isMobile } = useIsMobile(850);

  let dif = difficulty;
  console.log(difficulty);

  const DUMMY_Questions = {
    easy: [
      {
        id: 1,
        task_description_truth:
          "Felelsz: A jelenelegiek közül ki irritál a legjobban?",
        task_description_dare:
          "Mersz: Valaki kever neked egy koktélt 3 alapanyagból amit talál és meg kell innod.",
        penalty: "Büntetés: 1 feles",
      },
      {
        id: 2,
        task_description_truth: "Felelsz: Baszodj meg",
        task_description_dare: "Mersz: Akkor is baszódj meg",
        penalty: "Büntetés: Még mindig",
      },
      {
        id: 3,
        task_description_truth: "Felelsz: Hány éves vagy?",
        task_description_dare: "Mersz: Mond meg hány éves vagy",
        penalty: "Büntetés: 1 körty sör",
      },
    ],
    medium: {},
    hard: {},
    logo: "logo_img",
    title: "Felelsz vagy mersz?",
  };

  const exitClickHandler = () => {
    history.push("/menu");
  };

  let sorszam = Math.floor(Math.random() * DUMMY_Questions.easy.length);

  const nextClickHandler = () => {
    setCardIsReaded(false);
  };

  const instaClickHandler = () => {
    console.log("Go to the instagramm");
  };

  const rotateClickHandler = () => {
    setCardIsReaded(true);
  };

  return (
    <div style={{ width: width, height: height }}>
      <div className={classes.exit}>
        <button onClick={exitClickHandler}>X</button>
      </div>
      <div className={classes.logo}>{DUMMY_Questions.logo}</div>
      <div className={classes.flip_card} onClick={rotateClickHandler}>
        <div className={classes.flip_card_inner}>
          <div className={classes.flip_card_front}>
            <div className={classes.backgounder}></div>
          </div>
          <div className={classes.flip_card_back}>
            <div className={classes.truth}>
              {DUMMY_Questions.easy[sorszam].task_description_truth}
            </div>
            <div className={classes.dare}>
              {DUMMY_Questions.easy[sorszam].task_description_dare}
            </div>
            <div className={classes.penalty}>
              {DUMMY_Questions.easy[sorszam].penalty}
            </div>
            <div className={classes.insta} onClick={instaClickHandler}>
              📳Instagramm
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.next}
        style={{ display: cardIsReaded ? "block" : "none" }}
      >
        <Fade duration={3500}>
          <button onClick={nextClickHandler}>Next</button>
        </Fade>
      </div>
    </div>
  );
};

export default FelelszVagyMersz;

/**
 *  <div style={{ display: gaming ? "none" : "block" }}>
        <div>
          <h1>Felelsz vagy mersz?</h1>
        </div>
        <div>
          <h2>Szabályok</h2>
          Ha valaki hazudik, "Büntetés". Ha nem csinálod meg a büntetést
          kiestél.
        </div>
        <div>
          <h2>Leírás</h2>
          Az óra járásával megegyezően valaki felhúz egy kártyát a pakliból és
          akit szeretne attól megkérdezi hogy "felelsz vagy mersz?". Ha
          választott fél azt mondja hogy felel, akkor a "Felelsz" részt kell
          felolvasni. Ha azt mondja hogy "mer", akkor a "Mersz" részt kell.
          Miután felolvastad, kiválasztottnak őszintén válaszolni kell, vagy meg
          kell tennie azt ami a kártyára van írva. Ha nem teszi meg akkor a
          kártya alján lévő "Büntetés"-t végre kell hajtani. Ha pedig valaki úgy
          véli hogy hazudott a válaszoló akkor felszólalhat és vita kezdődik. A
          vita vesztese hajtja végre a "Büntetés"-t.
        </div>
        <div>
          <h4>Nehézségi szint</h4>
          <form action="/#">
            <input type="radio" value="easy" id="easy" name="checked" />
            <label htmlFor="easy">Easy</label>
            <input type="radio" value="medium" id="medium" name="checked" />
            <label htmlFor="medium">Medium</label>
            <input type="radio" value="hard" id="hard" name="checked" />
            <label htmlFor="hard">Hard</label>
          </form>
        </div>
        <div>
          <button onClick={okCkilckHandler}>Ok</button>
        </div>
      </div>
 */
