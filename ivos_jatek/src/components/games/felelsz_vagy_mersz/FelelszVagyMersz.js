import useIsMobile from "../../../hooks/use-mobile";
import { useHistory } from "react-router-dom";

import classes from "./FelelszVagyMersz.module.css";

const FelelszVagyMersz = (difficulty) => {
  const history = useHistory();
  const { width, height, isMobile } = useIsMobile(850);

  const DUMMY_Questions = {
    easy: {
      card_01: {
        task_description_truth:
          "Felelsz: A jelenelegiek közül ki irritál a legjobban?",
        task_description_dare:
          "Mersz: Valaki kever neked egy koktélt 3 alapanyagból amit talál és meg kell innod.",
        penalty: "Büntetés: 1 feles",
      },
    },
    medium: {},
    hard: {},
    back_cover: "img_src",
    logo: "img_src",
    instagramm_link: "📳text_link",
    title: "Felelsz vagy mersz?",
  };

  const exitClickHandler = () => {
    history.push("/menu");
  };

  const nextClickHandler = () => {
    history.push("/felelsz_vagy_mersz");
  };

  const instaClickHandler = () => {
    console.log("Go to the instagramm");
  };

  return (
    <div className={classes.back} style={{ width: width, height: height }}>
      <div className={classes.logo}>Logó</div>
      <div className={classes.exit}>
        <button onClick={exitClickHandler}>X</button>
      </div>

      <div className={classes.task}>
        <div className={classes.truth}>
          {DUMMY_Questions.easy.card_01.task_description_truth}
        </div>
        <div className={classes.dare}>
          {DUMMY_Questions.easy.card_01.task_description_dare}
        </div>
        <div className={classes.penalty}>
          {DUMMY_Questions.easy.card_01.penalty}
        </div>
      </div>
      <div className={classes.next}>
        <button onClick={nextClickHandler}>Next</button>
      </div>

      <div className={classes.insta} onClick={instaClickHandler}>
        📳Instagramm
      </div>
    </div>
  );
};

export default FelelszVagyMersz;
