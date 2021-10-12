import React, { Component } from "react";
import { Link } from "react-router-dom";
import LandingImage from "../assets/images/title-back.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <img className="landing-img" src={LandingImage} alt="landing" />
          <div className="landing-title">INTERNATIONAL ANGELS</div>
          <Link className="explore-btn" to="/explore">
            Explore
          </Link>
        </div>
        <div className="about">
          <h1>ABOUT US</h1>
          <p>
            Universities are innovation hubs, and historically many innovative
            companies started as campus startups. Some successful startup
            examples include Facebook, Yahoo, and Wordpress. With an increasing
            number of investors recognizing the potential value to be made from
            supporting startups, angel investing is becoming more and more
            popular. Between 2012 and 2017, startup funding across all
            industries in the U.S. grew by at least 50 percent. In 2013, the
            total funding for artificial intelligence startups amounted to about
            1.7 billion U.S. dollars, which grew to over 15 billion dollars by
            2017.
            <br />
            <br />
            International Angels wants every idea to be heard and possibly turn
            every feasible idea into successful companies. International Angels
            seeks to create a community in which entrepreneurs and investors are
            connected, informed, and empowered. To source startups,
            International Angels will initially focus on startups coming out of
            Berkeley Campus Organisations and later on expand to other UC
            schools and additional campuses. To source angel investors, we will
            first leverage personal networks and later reach out to additional
            potential investors. International Angels vows to support new ideas
            and businesses through leveraging the capital of angel investors
            alongside their extensive networks and experiences.
          </p>
        </div>
      </div>
    );
  }
}
