import React, { Component } from "react";


import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CovidData from "./CovidData";
import News from "./News";
import covidVideo from '../videos/CoVID-3D.mp4'
import Chart from '../photos/Chart-bar.jpg'
import Kosovo2020 from '../photos/Kos-2020.png'
import Kosstat from '../photos/Kos-stat.jpg'


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
        <div className="Home">
          <div className="row-2">
            <div className="col">
        <h2>Çfarë është virusi COVID-19?</h2>
        <h6> Koronaviruset janë familja e viruseve të cilat shkaktojnë sëmundje nga një rrufë e lehtë deri në
           sëmundje më të rënda si Sindroma Respiratore e Lindjes së Mesme (Middle East Respiratory Syndrome MERS)
            dhe Sindroma e Rëndë Respiratore Akute (Severe Acute Respiratory Syndrome SARS).</h6>
        <p>Në videon më poshtë mund të shikoni se çfarë lloj virusi është ky dhe si mund të shpërndahet</p>
          <div className="videoja">
            <video className="video1" onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo} ref="vidRef" src={covidVideo} width="700px" height="400px" autoplay/>
           <figure className="fotoks">
            <img src={Kosovo2020} className="kos2020" width="250px" height="250px"></img>
            <figcaption>
              Harta e komunave të prekura me COVID-19 ne Kosovë (sipas dates 19 Prill)
            </figcaption>
            </figure>

            <button onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}><i className="fas fa-play-circle"></i></button>
            </div>  
            </div>
            </div> 



           

        </div>

      <div className="stats">


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

