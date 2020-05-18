<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import './App.css';
=======
import React from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from './views/LoginPage';
import CreatePage from './views/CreatePage';
>>>>>>> Stashed changes

import CTX from './components/Store'

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/times') // Can't be route for some reason
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCurrentTime(data.time);
    });
  }, []);

  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime}.</p>
      </header>
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
  );
}

export default App;