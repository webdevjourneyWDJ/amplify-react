import logo from './logo.svg';
import './App.css';

import {Analytics} from 'aws-amplify';

function App() {
  Analytics.record({name: "Home Vist"});

  Analytics.record({
    name: "Youtube Videos",
    attributes: {
      video: "Micro",
      author: "WDJ"
    }
  })

  Analytics.record({
    name: "Youtube Videos",
    attributes: {
      video: "Docker",
      author: "WDJ"
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. With Amplify
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
