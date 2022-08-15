import Character from "../components/UI/Character/Character";
import MenuNav from "../components/layouts/MenuNav";
import LevelBar from "../components/UI/LevelBar/LevelBar";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.menu}>
      <MenuNav />
      <div className={classes.character}>
        <Character />
      </div>
      <div className={classes.levelbar}>
        <p>Character name: </p>
        <p>Character level: </p>
        <LevelBar />
      </div>
    </div>
  );
};

export default Menu;
