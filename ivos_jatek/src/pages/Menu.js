import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import Character from "../components/UI/Character/Character";
import MenuNav from "../components/layouts/MenuNav";
import LevelBar from "../components/UI/LevelBar/LevelBar";

import classes from "./Menu.module.css";

const Menu = (props) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(true);

  const characterName = localStorage.getItem("email");
  const characterLevel = "semmi";
  //localStorage.removeItem("email");

  return (
    <div className={classes.menu}>
      {isHamburgerOpen && (
        <Fade position="right" triggerOnce duration={1000}>
          <MenuNav />
        </Fade>
      )}
      <div className={classes.character}>
        <p>Character name: {characterName}</p>
        <Character />
      </div>
      <div className={classes.levelbar}>
        <p>Character level: {characterLevel}</p>
        <LevelBar />
      </div>
    </div>
  );
};

export default Menu;
