import classes from "./Card.module.css";

const Card = (color, type, aligne) => {
  return (
    <div className={classes.card}>
      {aligne ? (
        <div style={{ right: 0 }}>
          <div className={classes.title}>{color}</div>
          <div className={classes.description}>{type}</div>
        </div>
      ) : (
        <div style={{ left: 0 }}>
          <div className={classes.title}>{color}</div>
          <div className={classes.description}>{type}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
