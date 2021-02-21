import React, { lazy, Suspense } from "react";
import Sidebar from "./components/Sidebar";
import "./sass/css/style.min.css";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Home = lazy(() => import('./components/Home'));
const Team = lazy(() => import('./components/Team'));
const Contacts = lazy(() => import('./components/Contacts'));

const App = () => (
  <Router>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/contacts" component={Contacts} />
      </Suspense>
    </Switch>
    <Sidebar />
  </Router>
);
export default App;
