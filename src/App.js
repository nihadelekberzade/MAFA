import React from 'react';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Team from './components/Team';
import './sass/css/style.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path='/home' component={Home} />
          <Route path='/team' component={Team} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
