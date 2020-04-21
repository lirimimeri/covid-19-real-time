import React, { Component } from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CovidData from "./CovidData";
import News from "./News";
import covidVideo from '../videos/CoVID-3D.mp4'
import Chart from '../photos/Chart-bar.jpg'

class Country extends Component {
  state = {
    isPlaying: false
  }

  render() {
    return (
      <div className="divikryesor">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        ></link>

        {/*  ===============================================================================================================*/}

        <Header 
        isNewsClicked={this.props.isNewsClicked}
        handleNews={this.props.handleNews}/>
        <CovidData data={this.props.data} isLoading={this.props.isLoading} />
        {this.props.isNewsClicked && <News />}
        <h2>Çfarë është virusi COVID-19?</h2>
      <div className="Home">
          <div className="videoja">
            <video className="video1" ref="vidRef" src={covidVideo} width="700px" height="400px" autoplay/>
            <button onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}>Play/pause</button>
            <img className="chart1" src={Chart} width="300px" height="400px"></img>
          </div> 
      </div>

      </div>
    );
  }
  playVideo =() => {
    this.refs.vidRef.play();
    this.setState({isPlaying: true})
  }
  stopVideo = () => {
    this.refs.vidRef.pause();
    this.setState({isPlaying: false})
  }
}

export default Country;
