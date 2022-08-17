import Settings from "../../components/UI/setting/Settings";
import Shop from "../../components/UI/shop/Shop";

import classes from "./NavBar.module.css";
import hmbbutton from "../../images/hmb-menu.jpg";
import gearbutton from "../../images/gear.jpg";
import shopbutton from "../../images/shop.jpg";

const NavBar = () => {
  const shopHandler = () => {
    console.log("to shop loading");
  };

  const settingsHandler = () => {
    console.log("to settings loading");
  };

  const menuOpenHandler = () => {
    let x = document.getElementById("hide");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <div className={classes.topnav}>
      <div className={classes.menutitle}>
        <a className={classes.active}>Menu</a>
      </div>
      <div className={classes.hidemenu} id="hide">
        <a>Játék 1</a>
        <a>Játék 2</a>
        <a>Játék 3</a>
      </div>
      <div className={classes.shop}>
        <img
          src={shopbutton}
          className={classes.icon}
          onClick={shopHandler}
        ></img>
      </div>
      <div className={classes.settings}>
        <img
          src={gearbutton}
          className={classes.icon}
          onClick={settingsHandler}
        ></img>
      </div>
      <div className={classes.icons}>
        <img
          src={hmbbutton}
          className={classes.icon}
          onClick={menuOpenHandler}
        ></img>
      </div>
    </div>
  );
};

export default NavBar;
