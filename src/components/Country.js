import React, { Component } from "react";


import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CovidData from "./CovidData";
import News from "./News";

import Footer from "./Footer";

class Country extends Component {
  render() {
    return (
      <div className="divikryesor">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        ></link>

        {/*====================================================================*/}

        <Header
          isNewsClicked={this.props.isNewsClicked}
          handleNews={this.props.handleNews}
        />
        <CovidData data={this.props.data} isLoading={this.props.isLoading} />
        {this.props.isNewsClicked && <News />}
        <div className="Home"></div>
        <News />
        <Footer />
      </div>
    );
  }
}

export default Country;
