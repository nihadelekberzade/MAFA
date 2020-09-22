import React from 'react';
import './app.css'
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Team from './components/Team/Team';
import './global.css'

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Contacts/> */}
      {/* <Team/> */}
      <Sidebar/>
    </div>
  );
}

export default App;
