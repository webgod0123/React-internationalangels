import React, { Component } from "react";

import Roadmap from "../assets/images/roadmap.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="roadmap-title">ROADMAP</div>
        <img className="roadmap-map" src={Roadmap} alt="Road Map" />
      </div>
    );
  }
}
