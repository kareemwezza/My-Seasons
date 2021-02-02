import React from "react";
import ReactDom from "react-dom";
import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";
import UserError from "./UserError";
import axios from "axios";

class App extends React.Component {
  state = {
    lat: null,
    lang: null,
    errorMessage: "",
    time: new Date().toLocaleTimeString(),
    myData: [],
  };

  onLocation = async (lat, lang) => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: lang,
          units: "metric",
          appid: "df2e9c0e4e4685a0c83961afbfd9c300",
        },
      }
    );
    this.setState({ myData: response.data });
    console.log(this.state.myData);
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lang: position.coords.longitude,
        });
        setInterval(() => {
          this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
        this.onLocation(this.state.lat, this.state.lang);
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay
            lat={this.state.lat}
            lang={this.state.lang}
            time={this.state.time}
            myData={this.state.myData}
          />
        </div>
      );
    }

    if (!this.state.lat && this.state.errorMessage) {
      return (
        <UserError message="Sorry, We Can't Access your current Location" />
      );
    }
    return <Spinner message="Please accept location Request" />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
