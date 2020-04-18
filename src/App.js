import React, { Component } from 'react';
import Country from './Country' //qetu e kom mar 

import Death from './photos/death.png'
import Infected from './photos/virus-molecule.png'
import Kosovo from './photos/kosovo.png'
import Albania from './photos/albania.png'


class App extends Component {
  state = { 
    Kosovo: []
   }
    
  componentDidMount() {
    //qeky funksion o buid-in i reactit g per kur tmirrsh naj tdhan prej api
    //a qet kodin posht copy paste pi te qajo faqja ku e kom marr api
    //--------------Kosovo---------------------------------------------------------------------
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Kosovo", {
	    "method": "GET",
	    "headers": {
		  "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		  "x-rapidapi-key": "ecbcf40389msh72d8be2c3fb1a4cp1ef65cjsn0036d98d6095"
	    }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ Kosovo: data.data.covid19Stats[0]})
      console.log(this.state.Kosovo)
    })
    .catch(err => {
	  console.log(err);
    });
    //------------------------------------------------------------------------------------------
  }

  
    
  render() { 
    return ( 
      <div>
        <Country 
        photo={Kosovo} 
        deaths={this.state.Kosovo.deaths}
        infected={this.state.Kosovo.confirmed}
        recovered={this.state.Kosovo.recovered}/>        
      </div>
     );
  }
}
 
export default App;