import React, { Component } from 'react';

import './styles.css'
import Death from './photos/death.png'
import Infected from './photos/virus-molecule.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import CovidData from './CovidData';



class Country extends Component {
    render() { 
        return ( 
            <div className="divikryesor"> 
                <link
             rel="stylesheet"
             href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
             integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
             crossorigin="anonymous"
                />
                <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"></link>

<<<<<<< HEAD
                <div>
                <header className="headeri1">
                <img src={this.props.photo} alt="Kosovo flag" className="logoks"/> <br />
                <ul class="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><i className="fa fa-home"></i> Ballina</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-bar-chart"></i> Statistika</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-comment-medical"></i>  Keshilla</a>
                            </li>
                            </ul>
                </header>
                </div>

                
                
                <div className="divi1">

                    
                    
                    <h5>Last updated: {this.props.data.lastUpdate}</h5>

                    <img src={Death} alt="Deaths" className="Logo"/> 
                    <h3 style={{display: "inline"}}>{this.props.data.deaths}</h3> <br /> 
                    
                    <img src={Infected} alt="infected" className="Logo" /> 
                    <h3 style={{display: "inline"}}>{this.props.data.confirmed}</h3><br />
                    
                    <h3>Recovered: {this.props.data.recovered}</h3>                   
                </div>
             

=======
                
                <Header />
                
                <CovidData data={this.props.data}/>
                
>>>>>>> fbbd8c35270170aefa3fbff1969dae433b5ed3fa
            </div>
         );
    }
}


export default Country; 