import classes from "./PageOverlay.module.css";

const PageOverlay = (props) => {
  return (
    <div className={classes.page_overlay}>
      <header className={classes.header}>
      </header>
      <div className={classes.page_overlay_content}>{props.children}</div>
      <footer className={classes.footer}>
      </footer>
    </div>
  );
};

export default PageOverlay;
