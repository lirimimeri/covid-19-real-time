import React, { Component } from 'react';

import Death from './photos/death.png'
import Infected from './photos/virus-molecule.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

class CovidData extends Component {
    render() { 
        return (  
            <div className="divi1">
                <div>
                    <h5>Last updated: {this.props.data.lastUpdate}</h5>

                    <img src={Death} alt="Deaths" className="Logo"/> 
                    <h3>{this.props.data.deaths}</h3> <br /> 
                        
                    <img src={Infected} alt="infected" className="Logo" /> 
                    <h3>{this.props.data.confirmed}</h3><br />
                        
                    <h3>Recovered: {this.props.data.recovered}</h3>                   
                    <hr/>
                </div>
            </div>
        );
    }
}
 
export default CovidData;