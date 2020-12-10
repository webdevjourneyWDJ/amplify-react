import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

import {Analytics} from 'aws-amplify';

function App() {

  useEffect(() => {
    // Analytics.record({name: "Home_page_vist"});

    Analytics.autoTrack('pageView', {
      enable: true,
      eventName: 'pageView',
      type: 'SPA',
      provider: 'AWSPinpoint',
      getUrl: () => {
          return window.location.origin + window.location.pathname;
      }
    });
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
