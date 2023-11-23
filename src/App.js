import React from "react";
import CelebrityList from "./CelebrityList/CelebrityList";
import data from "./celebritiesData";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h2>List View</h2>
      <CelebrityList data={data} />
    </div>
  );
};

export default App;
