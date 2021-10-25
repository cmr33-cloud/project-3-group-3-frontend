import "./App.css";
import React from "react";
import Login from "./pages/login/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Link} from 'react-router-dom'
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";
import GameSummary from "./pages/GameSummary";
function App() {
  return <div className="App">
          <Switch>
          <Route path='/' exact>
          <Login />
          </Route>
          <Route path='/dashboard' exact>
          <div>hello dashboard</div>
          </Route>
          <Route path="/testing">
            <Testing/>
          </Route>
          <Route path="/gamesummary">
            <GameSummary/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
          </Switch>
          </div>;
}

export default App;
