import React from "react";

const Startup = ({ img, title, description }) => {
  return (
    <div className="explore-startup">
      <img src={img} alt="startup" />
      <div className="description">
        <h1>{title}</h1>
        <p>{description}</p>
        <a
          href="mailto:kyran@berkeley.edu?body=I am
      interested in investing and would like to know
      more.&amp;subject=I am interested in Under Construction"
        >
          Get In Contact
        </a>
      </div>
    </div>
  );
};

export default Startup;
