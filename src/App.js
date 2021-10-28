import "./App.css";
import React from "react";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Testing from "./pages/Testing";

import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import CustomNav from "./components/CustomNav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import CreateRoom from "./pages/CreateRoom";
import SelectCategory from "./pages/SelectCategory";
import SelectDifficulty from "./pages/SelectDifficulty";
import Lobby from './pages/Lobby'
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Sidebar />
          <CustomNav />
          <Dashboard />
        </Route>
        <Route path="/newgame">
          <Sidebar/>
          <CustomNav/>
          <CreateRoom/>
        </Route>
        <Route path="/selectCategory">
          <Sidebar/>
          <CustomNav/>
          <SelectCategory/>
        </Route>
        <Route path="/selectDifficulty">
          <Sidebar/>
          <CustomNav/>
          <SelectDifficulty/>
        </Route>
        <Route path="/lobby">
          <Sidebar/>
          <CustomNav/>
          <Lobby/>
        </Route>
        <Route path="/about">
          <Sidebar />
          <CustomNav />
          <About />
        </Route>
        <Route path="/contact">
          <Sidebar />
          <CustomNav />
          <Contact />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        {/* temp route */}
        <Route path="/testing">
          <Sidebar />
          <CustomNav />
          <Testing />
        </Route>
        {/* Temperory Route */}
        <Route path="/questions">
        <Sidebar />
          <CustomNav />
          <Questions/>
        </Route>
        <Route path="/results">
        <Sidebar />
          <CustomNav />
          <Results/>
        </Route>
        <Route path="/leaderboard">
        <Sidebar />
          <CustomNav />
          <Leaderboard/>
        </Route>
    


        <Route path="*">
          <NotFound />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
