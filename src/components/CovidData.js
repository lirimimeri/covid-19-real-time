import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class CovidData extends Component {
  render() {
    return (
      <div style={{paddingTop: "25px"}}>
        <div className="row" style={{ height: "200px" }}>
          <div className="col">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              Të konfirmuara
            </h5>
            <h4>
              {this.props.isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                this.props.data.infected
              )}
              <i className="fas fa-user-plus" style={{ fontSize: "45px" }}></i>
            </h4>
          </div>

          <div className="col">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {" "}
              Të shëruar{" "}
            </h5>
            <h4 style={{}}>
              {this.props.isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                this.props.data.recovered
              )}{" "}
              <i className="far fa-smile-beam" style={{ fontSize: "45px" }}></i>{" "}
            </h4>
          </div>
          

          <div className="col">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              Të vdekur
            </h5>
            <h4>
              {this.props.isLoading ? (
                <i className="fas fa-spinner fa-spin" />
              ) : (
                this.props.data.deceased
              )}
              <i
                className="fas fa-skull-crossbones"
                style={{ fontSize: "45px" }}
              ></i>
            </h4>
          </div>
        </div>
        <div style={{backgroundColor: "rgb(56, 81, 90)"}}>
          <div>
            <h6 className="koha">
              Përditësimi i fundit : 
              {this.props.isLoading ? <i className="fas fa-spinner fa-spin"></i> : this.props.data.lastUpdatedAtApify}
            </h6>
            </div>
          </div>
      </div>
    );
  }
}

export default CovidData;
