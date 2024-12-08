import React, { useState } from "react";
import "../App/App.css";
import Header from "../Header/Header";

function App() {
  const [weatherData, setWeatherData] = useState();
  return (
    <>
      <div className="app__container">
        <Header></Header>
      </div>
    </>
  );
}

export default App;
