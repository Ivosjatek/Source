import Settings from "../../components/UI/setting/Settings";
import Shop from "../../components/UI/shop/Shop";

import classes from "./NavBar.module.css";
import hmbbutton from "../../images/hmb-menu.jpg";

const NavBar = () => {
  const myFunction = () => {
    let x = document.getElementById("hide");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <div className={classes.topnav}>
      <a className={classes.active}>Menu</a>
      <div id="hide">
        <a>Játék 1</a>
        <a>Játék 2</a>
        <a>Játék 3</a>
      </div>
      <img src={hmbbutton} className={classes.icon} onClick={myFunction}></img>
    </div>
  );
};

export default NavBar;
