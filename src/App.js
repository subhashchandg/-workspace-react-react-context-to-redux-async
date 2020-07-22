import React from 'react';
import './App.scss';
import Header from './components/header';
import Count from './components/count';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
