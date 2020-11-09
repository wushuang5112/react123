import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Button} from 'antd'
// import style from './style.less'
import './style.less'

function App() {
  return (
    <div className="App">
      <header className="App-header red">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">按钮操作</Button>
      </header>
    </div>
  );
}

export default App;
