import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './Home';
import Menu from './Menu';

// TODO: Delete .css files
// TODO: Use My Icon instead of name in header

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        <Menu />
        <p> Sai Sukrutha Chamakoora</p> 
        </header>
        <div>
          <Home />
        </div>
    </div>
  );
}

export default App;
