import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from './views/LoginPage';
import CreatePage from './views/CreatePage';

function App() {
  
  return (
    <Router className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/create" component={CreatePage} />
        </Switch>
      </header>
    </Router>
  );
}

export default App;