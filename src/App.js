import "./App.css";
import React from "react";
import Login from "./pages/login/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";
import Dashboard from "./pages/dashboard";
import Questions from "./pages/questions";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard/>
        </Route>
        <Route path="/testing">
          <Testing />
        </Route>
        {/* Temperory Route */}
        <Route path="/questions">
          <Questions/>
        </Route>

        
        <Route path="*">
          <NotFound />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
