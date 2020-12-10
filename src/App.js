import logo from './logo.svg';
import './App.css';

import {Analytics} from 'aws-amplify';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Analytics.record('Home page visit')
    Analytics.record({
      name: "UserSignIn",
      attributes: {
        userName: "WDJ"
      }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. With Amplify
        </p>
      </header>
    </div>
  );
}

export default App;
