import React from "react";
import "./DataDisplay.css";

const DataDisplay = (props) => {
  if (props.myData.length === 0) {
    return <div>Loading..</div>;
  }
  const {
    name,
    main: { temp, humidity, feels_like },
  } = props.myData;
  return (
    <div className="winter data-container">
      <div className="city">
        <h1>Current Location:</h1> <h3>{name}</h3>
      </div>
      <div className="ui grid temp-data">
        <div className="three wide column" id="temp">
          <h3>Today's Weather</h3>
          <span>{props.myData.weather[0].description}</span>
        </div>
        <div className="three wide column" id="temp-min">
          <h3>Humidity</h3>
          <span>{humidity} %</span>
        </div>
        <div className="three wide column" id="temp-max">
          <h3>Temperature</h3>
          <span> {temp} &#8451;</span>
        </div>
        <div className="three wide column" id="feel-like">
          <h3>Feels Like</h3>
          <span>{feels_like} &#8451;</span>
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
