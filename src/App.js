import "./App.css";
import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";
import Destination from "./Destination";
function App() {
  return (
    <>
      <Top />
      <div className="container">
        <Destination destimg="mt fuji.jpg" title="Mount Fujiyama" />
        <Destination destimg="mt fuji.jpg" title="Sydney Opera House" />
        <Destination destimg="mt fuji.jpg" title="Geirangerfjord" />
      </div>
      <Bottom />
    </>
  );
}

export default App;
