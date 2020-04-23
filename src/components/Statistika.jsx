import React, { Component } from "react";
import kostat from "../photos/kostat.jpg";

function Statistika() {
  return (
      <div className="row" style={{paddingBottom: "30px"}} id="statistika">
        <div className="col">
          <h5 style={{ textAlign: "left", color: "gainsboro" }}>
            Statistikat deri me daten 23 Prill 2020 :
          </h5>
          <img src={kostat} style={{ borderRadius: "10px" }}></img>
        </div>
      </div>
  );
}

export default Statistika;
