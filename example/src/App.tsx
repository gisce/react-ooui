import React from "react";
import "./App.css";
import { Button, Char } from "react-ooui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Char id="test" placeholder="Enter a task" />
        <Button type="dashed">Button</Button>
      </header>
    </div>
  );
}

export default App;
