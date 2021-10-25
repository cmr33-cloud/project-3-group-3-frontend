import "./App.css";
import React from "react";
import Login from "./pages/login/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import CustomNav from "./components/CustomNav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          
          <Sidebar/>
          <CustomNav/>
          <Dashboard/>
        </Route>
        <Route path="/about">
        <Sidebar/>
          <CustomNav/>
          <About />
        </Route>
        <Route path="/contact">
        <Sidebar/>
          <CustomNav/>
          <Contact />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/testing">
        <Sidebar/>
          <CustomNav/>
          <Testing />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
