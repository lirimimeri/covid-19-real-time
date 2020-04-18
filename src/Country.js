import React, { Component } from 'react';

import './styles.css'
import Death from './photos/death.png'
import Infected from './photos/virus-molecule.png'


class Country extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div> 
                <div>
                    <img src={this.props.photo} className="photos"/> <br />
                    
                    <img src={Death} className="Logo"/> 
                    <h3>{this.props.deaths}</h3>  
                    <img src={Infected} className="Logo" /> 
                    <h3>{this.props.infected}</h3>
                    <h3>Recovered: {this.props.recovered}</h3>
                    
                    
                    <hr/>
                </div>
            </div>
         );
    }
}


export default Country; 