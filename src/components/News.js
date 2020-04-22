import React, { Component } from "react";
// import ReactPlayer from 'react-player'
import Statistika from "../photos/Chart.jpg";
import covidVideo from "../videos/CoVID-3D.mp4";
import Chart from "../photos/Chart-bar.jpg";
import Kosovo2020 from "../photos/Kos-2020.png";
import Kosstat from "../photos/Kos-stat.jpg";
import corona3 from '../photos/corona3.jpg'
import corona4 from '../photos/corona4.jpg'

class News extends Component {
  state={
    isPlaying: false
  }
  render() {
    return (
      <div>
        <div class="row" style={{height: "auto"}}>
          <div class="col">
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
            <video className="video1"
              ref="vidRef"
              src={covidVideo}
              autoplay

              onClick={
                !this.state.isPlaying ? this.playVideo : this.stopVideo
              }
              />  
            <button
              onClick={
                !this.state.isPlaying ? this.playVideo : this.stopVideo
              }
            >
              <i className="fas fa-play-circle"></i>
            </button>
            
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img src={corona3}
            width="450px"
            height="350px"/>
          </div>
          <div class="col">
          <h2>ajshjkashdjksahdkjad</h2>
            <h5>
              ajdkjahs dkjahskjdajdkj ahsdkjahsk jd jdkjahsdk ahs kjd jdk ahs dk jahskjd
              ajdkj ahsdkjahskjd ajdkj hsdkj hskjd ajdkj a sdk ahskj dajdk jah kja skjd
              ajdkjahs dkjahskjdajdkj ahsdkjahsk jd jdkjahsdk ahs kjd jdk ahs dk jahskjd
              ajdkj ahsdkjahskjd ajdkj hsdkj hskjd ajdkj a sdk ahskj dajdk jah kja skjd
              ajdkjahs dkjahskjdajdkj ahsdkjahsk jd jdkjahsdk ahs kjd jdk ahs dk jahskjd
              ajdkj ahsdkjahskjd ajdkj hsdkj hskjd ajdkj a sdk ahskj dajdk jah kja skjd
            </h5>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <h2>ajshjkashdjksahdkjad</h2>
              <h5>
                ajdkjahs dkjahskjdajdkj ahsdkjahsk jd jdkjahsdk ahs kjd jdk ahs dk jahskjd
                ajdkj ahsdkjahskjd ajdkj hsdkj hskjd ajdkj a sdk ahskj dajdk jah kja skjd
                ajdkjahs dkjahskjdajdkj ahsdkjahsk jd jdkjahsdk ahs kjd jdk ahs dk jahskjd
                ajdkj ahsdkjahskjd ajdkj hsdkj hskjd ajdkj a sdk ahskj dajdk jah kja skjd
                ajdkjahs dkjahskjdajdkj ahsdkjahsk jd jdkjahsdk ahs kjd jdk ahs dk jahskjd
                ajdkj ahsdkjahskjd ajdkj hsdkj hskjd ajdkj a sdk ahskj dajdk jah kja skjd
              </h5>
          </div>
          <div class="col">
            <img src={corona4}
            width="450px"
            height="350px"/>
          </div>
        </div>
    
     <div className="Keshillat">
          <div className="advice"> 
              <i className="fas fa-hands-wash fa-3x"></i>
                  <h5 className="keshilla"> Pastroni duart shpesh me ujë dhe sapun ose perdorni ndonjë dezinfektues me bazë të lartë të alkoolit. </h5>
      </div>
          <div className="advice">
          <i class="fas fa-head-side-mask fa-3x"></i>
                <h5 className="keshilla"> Mos dilni pa maskë dhe dorëza.</h5>
          </div>

          <div className="advice">
          <i class="fas fa-house-user fa-3x"></i>
                <h5 className="keshilla">Shmangni daljet e panevojshme!</h5>
             </div>
          </div>


      <div className="Keshillat">
        <div className="advice">
          
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
