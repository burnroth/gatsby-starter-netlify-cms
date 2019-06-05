import React from "react";

const Features = ({ gridItems }) => (
  <div className="container">
    <div className="row">
      {gridItems.map(item => (
        <div
          key={item.image1.image.id + Math.random()}
          className="col-12 col-md-3"
        >
          <img className="icon" src={item.image1.image.publicURL} alt="" />
          <h4>{item.rubrik}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
