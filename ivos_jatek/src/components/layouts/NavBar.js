import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

import Settings from "../../components/UI/setting/Settings";
import Shop from "../../components/UI/shop/Shop";

import classes from "./NavBar.module.css";

import settingsgear from "../../images/engine-gears-icon.svg";
import shopbutton from "../../images/shopping-trolley-icon.svg";
import hmbbutton from "../../images/hamburger-menu-icon.svg";
import { useState } from "react";

const NavBar = () => {
  const [isOpne, setIsOpen] = useState(false);

  const shopHandler = () => {
    console.log("to shop loading");
  };

  const settingsHandler = () => {
    console.log("to settings loading");
  };

  const menuOpenHandler = () => {
    setIsOpen(!isOpne);
  };

  return (
    <div className={classes.topnav}>
      <div className={classes.menutitle}>
        <a className={classes.active}>Menu</a>
      </div>
      <div
        className={classes.hidemenu}
        style={{ display: isOpne ? "block" : "none" }}
      >
        <Slide direction="right">
          <Fade duration="3500">
            <div className={classes.order}>
              <p>Játék 1</p>
              <p>Játék 2</p>
              <p>Játék 3</p>
              <p>Játék 4</p>
            </div>
          </Fade>
        </Slide>
        <div className={classes.shop}>
          <img
            src={shopbutton}
            alt="shop"
            className={classes.icon}
            onClick={shopHandler}
          ></img>
        </div>
        <div className={classes.settings}>
          <img
            src={settingsgear}
            alt="gear"
            className={classes.icon}
            onClick={settingsHandler}
          ></img>
        </div>
      </div>

      <div className={classes.icons}>
        <img
          src={hmbbutton}
          alt="hmb"
          className={classes.icon}
          onClick={menuOpenHandler}
        ></img>
      </div>
    </div>
  );
};

export default NavBar;
