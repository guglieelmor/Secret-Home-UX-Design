import React from 'react';
import api  from './services/api'
import './App.css';
import Routes from './routes'

function App() {
  return (
    <div className="container">
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
