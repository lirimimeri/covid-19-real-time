import React, { Component } from "react";
// import ReactPlayer from 'react-player'
import Statistika from "../photos/Chart.jpg";
import covidVideo from "../videos/CoVID-3D.mp4";
import Chart from "../photos/Chart-bar.jpg";
import Kosovo2020 from "../photos/Kos-2020.png";
import Kosstat from "../photos/Kos-stat.jpg";
import corona3 from "../photos/corona3.jpg";
import corona4 from "../photos/corona4.jpg";

class News extends Component {
  state = {
    isPlaying: false,
  };
  render() {
    return (
      <div>
        <div class="row" style={{ height: "auto" }}>
          <div class="col" style={{textAlign: "right"}}>
            <h2>Çfarë është virusi COVID-19?</h2>
            <h5>
              {" "}
              Koronaviruset janë familja e viruseve të cilat shkaktojnë sëmundje
              nga një rrufë e lehtë deri në sëmundje më të rënda si Sindroma
              Respiratore e Lindjes së Mesme (Middle East Respiratory Syndrome
              MERS) dhe Sindroma e Rëndë Respiratore Akute (Severe Acute
              Respiratory Syndrome SARS).
            </h5>
          </div>
          <div class="col">
            <h4>
              Në videon më poshtë mund të shikoni se çfarë lloj virusi është ky
              dhe si mund të shpërndahet
            </h4>
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=PSnSo9kYlH4"></ReactPlayer> */}
            <video
              className="video1"
              ref="vidRef"
              src={covidVideo}
              autoplay
              onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}
            />
            <button
              onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}
            >
              <i className="fas fa-play-circle"></i>
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img src={corona3} width="450px" height="350px" />
          </div>
          <div class="col" style={{textAlign: "left"}}>
            <h2>Cilat janë simptomat e një personi të infektuar me koronavirus?</h2>
            <h5>
            Simptomat varen nga virusi, por shenjat e zakonshme 
            përfshijnë simptomat e aparatit të frymëmarrjes: ethe, 
            kollë, gulçim dhe vështirësi në frymëmarrje. Në raste më 
            të rënda, infeksioni mund të shkaktojë pneumoni, sindromë 
            të rëndë respiratore akute, insuficiencë të veshkave, 
            madje edhe vdekje.
            Kur një sëmundje është e re, nuk ka vaksinë për të, dhe mund të 
            duhen disa vite derisa të prodhohet një vaksinë e re.
            </h5>
          </div>
        </div>

        <div class="row">
          <div class="col" style={{textAlign: "right"}}>
            <h2>
              A mund të infektohen njerëzit me koronavirusin
              e ri ku si burim infektimi janë kafshët?
            </h2>
            <h5>
              Hetimet e hollësishme në Kinë në vitin 2002 kanë
              zbuluar se SARS-CoV u transmetua nga macet te njerëzit,
              kurse në Arabinë Saudite në vitin 2012 u zbulua 
              MERS-CoV nga devetë te njerëzit. Njihen disa koronaviruse 
              të cilët po qarkullojnë në kafshë, por që akoma nuk kanë 
              infektuar njerëzit. Ndërkohë që survejanca në të gjithë botën 
              përmirësohet, ka të ngjarë që të identifikohen më shumë koronaviruse.
            </h5>
          </div>
          <div class="col">
            <img src={corona4} width="450px" height="350px" />
          </div>
        </div>

        <div class="row" style={{paddingTop: "30px", backgroundColor: "#d3d3d3"}}>
          <div class="col">
            <i class="fas fa-hands-wash fa-3x"></i>
            <h5>
              {" "}
              Pastroni duart shpesh me ujë dhe sapun ose perdorni ndonjë
              dezinfektues me bazë të lartë të alkoolit.{" "}
            </h5>
          </div>
          <div class="col">
            <i class="fas fa-head-side-mask fa-3x"></i>
            <h5> Mos dilni pa maskë dhe dorëza.</h5>
          </div>

          <div class="col">
            <i class="fas fa-house-user fa-3x"></i>
            <h5>Shmangni daljet e panevojshme!</h5>
          </div>
          
        </div>

        
      </div>
    );
  }
  playVideo = () => {
    this.refs.vidRef.play();
    this.setState({ isPlaying: true });
  };
  stopVideo = () => {
    this.refs.vidRef.pause();
    this.setState({ isPlaying: false });
  };
}

export default News;
