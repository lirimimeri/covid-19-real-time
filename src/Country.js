import React, { Component } from 'react';

import './styles.css'
import Death from './photos/death.png'
import Infected from './photos/virus-molecule.png'



class Country extends Component {
    render() { 
        return ( 
            <div> 
                <div>
                    <h5>Last updated: {this.props.data.lastUpdate}</h5>

                    <img src={this.props.photo} alt="Kosovo flag" className="photos"/> <br />

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