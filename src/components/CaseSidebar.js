import React from "react";
import Img from "gatsby-image";

const CaseSidebar = ({ content }) => (
	<div className="row">
    {content.map(item => (
      <div key={item.image.id} className="col-12 text-center">
          <Img
            fluid={item.image.childImageSharp.fluid}
            alt={item.rubrik}
          />
          <h2>{item.rubrik}</h2>
          <p>{item.text}</p>
        </div>
		))}
		</div>
);

export default CaseSidebar;