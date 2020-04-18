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
                    <img src={this.props.photo} className="photos"/>
                    
                        <img src={Death} className="Logo"/>  
                        <img src={Infected} className="Logo" /> 
                        <hr/>
                </div>
            </div>
         );
    }
}


export default Country; //qetu ja kom bo eksport per me mujt anej me bo inport