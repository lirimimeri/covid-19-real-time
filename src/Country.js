import React, { Component } from 'react';

import './styles.css'
import Death from './photos/death.png'
import Infected from './photos/virus-molecule.png'
import 'bootstrap/dist/css/bootstrap.min.css';


class Country extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div> 
                <link
             rel="stylesheet"
             href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
             integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
             crossorigin="anonymous"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div>
                <header className="headeri1">
                <img src={this.props.photo} alt="Kosovo flag" className="logoks"/> <br />
                <ul class="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><i class="fas fa-home"></i> Ballina</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i class="fa fa-car"></i> Statistika</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> <i class="fas fa-home"></i> Keshilla</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                            </ul>
                </header>
                </div>
                
                <div>
                    <h5>Last updated: {this.props.data.lastUpdate}</h5>

                    <img src={Death} alt="Deaths" className="Logo"/> 
                    <h3 style={{display: "inline"}}>{this.props.data.deaths}</h3> <br /> 
                    
                    <img src={Infected} alt="infected" className="Logo" /> 
                    <h3 style={{display: "inline"}}>{this.props.data.confirmed}</h3><br />
                    
                    <h3>Recovered: {this.props.data.recovered}</h3>                   
                    <hr/>
                </div>
            </div>
         );
    }
}


export default Country; 