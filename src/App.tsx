import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Char } from './widgets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Char
          id="test"
          placeholder="Enter a task"
          //autoFocus
          //className="form-control"
        />
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
