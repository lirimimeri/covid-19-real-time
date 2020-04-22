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
        handleNews={this.handleNews}/>
      </div>
    );
  }
  componentDidMount() {
    //--------------Kosovo---------------------------------------------------------------------
    // fetch(
    //   "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Kosovo",
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    //       "x-rapidapi-key":
    //         "ecbcf40389msh72d8be2c3fb1a4cp1ef65cjsn0036d98d6095",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ Kosovo: data.data.covid19Stats[0] });
    //     this.setState({ isLoading: false });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //------------------------------------------------------------------------------------------
  
      fetch("https://api.apify.com/v2/key-value-stores/C10heVVVE8yBd1YvF/records/LATEST?disableRedirect=true")
      .then(response => response.json())
      .then(data => {
        this.setState({Kosovo: data})
      })
      this.setState({ isLoading: false })
  }
}

export default App;
