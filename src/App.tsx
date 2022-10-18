import React from "react";
import "./App.css";
import CardContainer from "./cardContainer";
import Newsletter from "./newsletter";
import Section2 from "./section2";

function App() {
  return (
    <div className="App">
      <Section2 />
      <Newsletter />
      <CardContainer/>
    </div>
  );
}

export default App;
