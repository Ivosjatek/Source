import { useState } from "react";
import { useHistory } from "react-router-dom";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import Cheeres from "../components/UI/cheersAnimation/Cheers";
import "../App.css";
import "./Home.css";
import useHttp from "../hooks/use-http";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isLoading, error, sendRequest: fetchUsers } = useHttp();
  const [started, setStarted] = useState(false);
  const history = useHistory();

  const startingGameHandler = () => {
    setStarted(true);
    setIsAuthenticated(false);
    setTimeout(() => {
      if(isAuthenticated){
        history.push("/menu");
      }else{
        history.push("/login");
      }
    }, 2500);
  };

  return (
    <div className="App">
      <header className="App-header">
        {started ? (
          <Cheeres />
        ) : (
          <p onClick={startingGameHandler}>Start game</p>
        )}
        {isLoading && !error && <LoadingSpinner />}
        {!isLoading && error && <p>{error}</p>}
      </header>
      <div className="backdrop">
        <div className="backdrop_inner"></div>
      </div>
    </div>
  );
};

export default Home;
