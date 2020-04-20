import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

class CovidData extends Component {
    render() { 
        return (  
            <div style={{textAlign: "center"}}>
                <h5>Last updated: { this.props.isLoading ? <i class="fas fa-spinner fa-spin"></i> :  this.props.data.lastUpdate}</h5>
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="">
                            <h5 className="card-title" style={{textAlign: "center"}}> Të konfirmuara </h5>
                            <h4 style={{}}>{this.props.isLoading ? <i class="fas fa-spinner fa-spin"></i> : this.props.data.confirmed}   
                            <i class="fas fa-user-plus" style={{fontSize: "45px"}}></i>    
                            </h4>
                                {/* fa fa-spinner  loading logo....*/}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="">
                            <h5 className="card-title" style={{textAlign: "center"}}> Të shëruar </h5>
                            <h4 style={{}}>{this.props.isLoading ? <i class="fas fa-spinner fa-spin"></i> : this.props.data.recovered}   <i class="far fa-smile-beam" style={{fontSize: "45px"}}></i>    </h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="">
                            <h5 className="card-title" style={{textAlign: "center"}}> Të vdekur </h5>
                            <h4 style={{}}>{ this.props.isLoading ? <i class="fa fa-spinner"/> : this.props.data.deaths}   <i class="fas fa-skull-crossbones" style={{fontSize: "45px"}}></i>    </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default CovidData;