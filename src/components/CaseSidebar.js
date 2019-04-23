import React from "react";
import Img from "gatsby-image";

const CaseSidebar = ({ content }) => (
	<div className="row">
    {content.map(item => (
      <div key={item.blurb.image.id} className="col-12 text-center">
          <Img
            fluid={item.blurb.image.childImageSharp.fluid}
            alt={item.blurb.rubrik}
          />
          <h2>{item.blurb.rubrik}</h2>
          <p>{item.blurb.text}</p>
        </div>
		))}
		</div>
);

export default CaseSidebar;