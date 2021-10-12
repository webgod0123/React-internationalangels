import React, { Component } from "react";

import Img1 from "../assets/images/under_construction.jpg";
import Img2 from "../assets/images/step2.jpg";
import Img3 from "../assets/images/startup_default.png";
import Startup from "../components/Startup";

export default class Home extends Component {
  state = {
    startups1: [
      {
        img: Img1,
        title: "Under Construction",
        description:
          "This page is currently under construction. Sorry for any inconvenience.",
      },
      {
        img: Img2,
        title: "Under Construction",
        description: "Duende (insert tequila) ??? Profit",
      },
    ],
    startups2: [
      {
        img: Img3,
        title: "???",
        description: "I can give you 1,000,000 just ask the right questions",
      },
      {
        img: Img3,
        title: "did you know",
        description:
          "rich people can build machines off the coast of Los Angeles that could evaporate the ocean and create a limitless supply of rainwater for crops across the states? would only take the right wind direction... type of shit they are already doing in china",
      },
    ],
  };
  render() {
    return (
      <div className="explore">
        <div className="explore-row blue-gradient">
          {this.state.startups1.map((startup, index) => (
            <Startup
              key={index}
              img={startup.img}
              title={startup.title}
              description={startup.description}
            />
          ))}
        </div>
        <div className="explore-row purple-gradient">
          {this.state.startups2.map((startup, index) => (
            <Startup
              key={index}
              img={startup.img}
              title={startup.title}
              description={startup.description}
            />
          ))}
        </div>
      </div>
    );
  }
}
