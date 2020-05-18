import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './styles/App.css'; 
import CreatePage from './views/CreatePage';

function App() {
  return (
    <Router className="App">
        <Switch>
          <Route exact path="/" component={CreatePage} />
        </Switch>
    </Router>
  );
}

export default App;