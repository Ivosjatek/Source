import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Register from "./pages/Register";
import Busz from "./components/games/busz/Busz";
import LapFelcsapas from "./components/games/lapfelcsapas/LapFelcsapas";
import FelelszVagyMersz from "./components/games/felelsz_vagy_mersz/FelelszVagyMersz";

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
      <Route path="/lapfelcsapas">
        <LapFelcsapas />
      </Route>
      <Route path="/felelsz_vagy_mersz">
        <FelelszVagyMersz />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;
