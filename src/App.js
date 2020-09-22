import React from 'react';
import './app.css'
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Team from './components/Team/Team';
import './global.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
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
