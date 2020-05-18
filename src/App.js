<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import './App.css';
=======
=======
>>>>>>> Added initial mongo implementation
<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import './App.css';
=======
import React from 'react';
import './styles/App.css';
<<<<<<< HEAD
>>>>>>> Added initial mongo implementation
=======
>>>>>>> Added initial mongo implementation
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

import LoginPage from './views/LoginPage';
import CreatePage from './views/CreatePage';
>>>>>>> Stashed changes

import CTX from './components/Store'
>>>>>>> Added initial mongo implementation

import LoginPage from './views/LoginPage';
import CreatePage from './views/CreatePage';
>>>>>>> Stashed changes

import CTX from './components/Store'
>>>>>>> Added initial mongo implementation

import LoginPage from './views/LoginPage';
import CreatePage from './views/CreatePage';

function App() {
  
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Router className="App">
=======
=======
>>>>>>> Added initial mongo implementation
<<<<<<< Updated upstream
    <div className="App">
>>>>>>> Added initial mongo implementation
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/create" component={CreatePage} />
        </Switch>
      </header>
<<<<<<< HEAD
    </Router>
=======
    </div>
=======
    <CTX.Provider value={{verified: 'Hi'}}>
      <Router className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/create" component={CreatePage} />
          </Switch>
      </Router>
    </CTX.Provider>
>>>>>>> Stashed changes
<<<<<<< HEAD
>>>>>>> Added initial mongo implementation
=======
>>>>>>> Added initial mongo implementation
  );
}

export default App;