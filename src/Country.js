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

                
                <Header />
                
                <CovidData data={this.props.data}/>
                
            </div>
         );
    }
}


export default Country; 