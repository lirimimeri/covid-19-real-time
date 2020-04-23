import React, { Component } from "react";

function Keshilla() {
  return (
    <div id="keshilla">
      <div
        className="row"
        id="keshillat"
        style={{ paddingTop: "30px", backgroundColor: "#d3d3d3" }}
      >
        <div className="col">
          <i className="fas fa-hands-wash fa-3x"></i>
          <h5 style={{ color: "#686464" }}>
            {" "}
            Pastroni duart shpesh me ujë dhe sapun ose perdorni ndonjë
            dezinfektues me bazë të lartë të alkoolit.{" "}
          </h5>
        </div>
        <div className="col">
          <i className="fas fa-head-side-mask fa-3x"></i>
          <h5 style={{ color: "#686464" }}>
            {" "}
            Mos dilni pa maskë dhe dorëza,shmangni prekjet e fytyrës me dorë.
          </h5>
        </div>

        <div className="col">
          <i className="fas fa-house-user fa-3x"></i>
          <h5 style={{ color: "#686464" }}>
            Shmangni daljet e panevojshme! Të gjithë po qëndrojmë në shtëpi,
            edhe ti #rriNshpi !
          </h5>
        </div>
      </div>
      <div
        className="row"
        style={{ paddingTop: "30px", backgroundColor: "#d3d3d3" }}
      >
        <div className="col">
          <i className="fas fa-people-arrows fa-3x"></i>
          <h5 style={{ color: "#686464" }}>
            {" "}
            Mbani distancën e nevojshme nga njëri-tjetri!{" "}
          </h5>
        </div>
        <div className="col">
          <i className="fas fa-handshake-slash fa-3x"></i>
          <h5 style={{ color: "#686464" }}>
            {" "}
            Evitoni dorë-shtrëngimet! Provoni përshëndetjet tjera, është
            argëtuese!
          </h5>
        </div>
        <div className="col">
          <i className="fas fa-head-side-cough-slash fa-3x"></i>
          <h5 style={{ color: "#686464" }}>
            {" "}
            Kujdes kur tështini ose kolliteni, mbulojeni gojen me mëngë ose
            pallomë.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Keshilla;
