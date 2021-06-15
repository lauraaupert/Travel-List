import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Background from "./components/Background";
import MapContainer from "./components/MapContainer";
import AddDestination from "./components/AddDestination";
import SearchPlace from "./components/SearchPlace"

function App(props) {

  const [bg, setFile] = useState(
    "https://source.unsplash.com/random/1280x800/?nature"
  );
  function onChange(event) {
    var bgurl = URL.createObjectURL(event.target.files[0]);
    setFile(bgurl);
  }
  return (
    <div className="App" style={{
      backgroundSize: "cover",
      backgroundImage: `url(` + bg + `)`,
      margin: 0,
    }}
    >
               <SearchPlace />

            <MapContainer onChange={onChange} 
            />
            {/* <AddDestination /> */}

    </div>
  );
}


export default App;
