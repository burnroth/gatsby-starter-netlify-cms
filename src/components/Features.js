import React from "react";
import Img from "gatsby-image";

const Features = ({ gridItems }) => (
  <div className="container">
	<div className="row">
    {gridItems.map(item => (
      <div key={item.id} className="col-12 col-md-3 text-center">
          <Img
            fluid={item.image1.image.childImageSharp.fluid}
            alt={item.image1.alt}
          />
          <h2>{item.rubrik}</h2>
          <p>{item.text}</p>
        </div>
		))}
		</div>
  </div>
);

export default Features;
