import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './styles/App.css'; 
import CTX from './components/Store'
import CreatePage from './views/CreatePage';

function App() {
  let struct = {
    hi: '1'
  }

  return (
    <CTX.Provider value={{struct}}>
      <Router className="App">
          <Switch>
            <Route exact path="/" component={CreatePage} />
          </Switch>
      </Router>
    </CTX.Provider>
  );
}

export default App;