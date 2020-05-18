import React from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from './views/LoginPage';
import CreatePage from './views/CreatePage';

import CTX from './components/Store'

function App() {
  return (
    <CTX.Provider value={{verified: 'Hi'}}>
      <Router className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/create" component={CreatePage} />
          </Switch>
      </Router>
    </CTX.Provider>
  );
}

export default App;