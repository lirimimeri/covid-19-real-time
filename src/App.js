import React, { Component } from "react";
import Country from "./components/Country";

class App extends Component {
  state = {
    Kosovo: "",
    isLoading: true,
  };

  render() {
    return (
      <div>
        <Country
          data={this.state.Kosovo}
          isLoading={this.state.isLoading}
          isNewsClicked={this.state.isNewsClicked}
          handleNews={this.handleNews}
        />
      </div>
    );
  }
  componentDidMount() {
    fetch(
      "https://api.apify.com/v2/key-value-stores/C10heVVVE8yBd1YvF/records/LATEST?disableRedirect=true"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Kosovo: data });
      });
    this.setState({ isLoading: false });
  }
}

export default App;
