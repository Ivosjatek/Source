import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Register from "./pages/Register";
import Busz from "./components/games/busz/Busz";

function App() {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/busz">
        <Busz />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;
