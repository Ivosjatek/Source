import { useState } from "react";

const GameCard = (type, number) => {
  const [kor, setKor] = useState(false);
  const [karo, setKaro] = useState(false);
  const [treff, setTreff] = useState(false);
  const [pikk, setPikk] = useState(false);

  if (type === kor) {
    setKor(!kor);
  }
  if (type === karo) {
    setKaro(!karo);
  }
  if (type === treff) {
    setTreff(!treff);
  }
  if (type === pikk) {
    setPikk(!pikk);
  }

  return (
    <div className={classes.card}>
      <div className={classes.emblemLeft}>
        <div>{number}</div>
      </div>
      <div className={classes.type}>
        {kor && <img src="" alt="Kör" />}
        <div className={classes.heart}></div>
        {karo && <img src="" alt="Káró" />}
        {treff && <img src="" alt="Treff" />}
        {pikk && <img src="" alt="Pikk" />}
      </div>
      <div className={classes.emblemRight}>
        <div>{number}</div>
      </div>
    </div>
  );
};

export default GameCard;
