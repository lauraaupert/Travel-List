import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Background from "./components/Background";

function App(props) {

  const [bg, setFile] = useState(
    "https://source.unsplash.com/random/1280x800/?nature"
  );
  function onChange(event) {
    var bgurl = URL.createObjectURL(event.target.files[0]);
    setFile(bgurl);
  }
  return (
    <div className="App" >
            {/* <Background onChange={onChange}/> */}

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
