import React, { Component } from 'react';
import Country from './Country' 


class App extends Component {
  state = { 
    Kosovo: []
   }
    
  componentDidMount() {
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
        data={this.state.Kosovo}/>        
      </div>
     );
  }
}
 
export default App;