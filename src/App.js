import React from "react";
import Sidebar from "./components/Sidebar";
import "./sass/css/style.css";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <Sidebar />
    </Router>
  );
}
export default App;
