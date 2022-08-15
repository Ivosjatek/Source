import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import LoadingSpinner from "../components/UI/LoadingSpinner";

import logo from "../logo.svg";
import "../App.css";
import useHttp from "../hooks/use-http";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(); //basicle isnt logged in
  const { isLoading, error, sendRequest: fetchUsers } = useHttp();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/menu");
    }
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [isAuthenticated]);

  const startingGameHandler = () => {
    setIsAuthenticated(true);
    fetchUsers({
      url: "" /*+ "/id"*/,
    });
  };

  const alapReactImage = <img src={logo} className="App-logo" alt="logo" />;

  return (
    <div className="App" onClick={startingGameHandler}>
      <header className="App-header">
        {alapReactImage}
        <p>Start game</p>
        {isLoading && !error && <LoadingSpinner />}
        {!isLoading && error && <p>{error}</p>}
      </header>
    </div>
  );
};

export default Home;
