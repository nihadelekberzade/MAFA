import React from 'react';
import './app.css'
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import './global.css'

function App() {
  return (
    <div className="App">
      <Home/>
      <Sidebar/>
    </div>
  );
}

export default App;
