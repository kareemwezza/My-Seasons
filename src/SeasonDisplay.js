import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  winter: {
    text: "Burr! It's Chilly",
    iconName: "snowflake",
  },

  summer: {
    text: "Let's hit the beach!!",
    iconName: "sun",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];
  if (props.myData.length === 0) {
    return <div>Loading..</div>;
  }
  const {
    name,
    main: { temp, feels_like },
  } = props.myData;
  return (
    <div>
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <div>
          <h1 className="title">{season} is here</h1>
          <h1>{text}</h1>
          <h2>Your current Location is: {name}</h2>
          <div className="the-temp">
            <h3>
              Temperature: {temp}&#8451; (Feels Like: {feels_like}&#8451;).
            </h3>
          </div>
        </div>
        <i className={`icon-right massive ${iconName} icon`}></i>
        <p id="time">Time: {props.time}</p>
      </div>
    </div>
  );
};
export default SeasonDisplay;
