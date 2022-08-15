import NavBar from "./NavBar";

const MenuNav = (props) => {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
};

export default MenuNav;
