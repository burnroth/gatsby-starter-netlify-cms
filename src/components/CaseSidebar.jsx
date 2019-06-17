import React from "react";

const CaseSidebar = ({ content }) => (
  <div id="CaseSidebar" className="row">
    {content.map(item => (
      <div key={item.blurb.image.id} className="col-12">
        <img className="icon" src={item.blurb.image.publicURL} alt={item.blurb.image.rubrik} />
        <h4><b>{item.blurb.rubrik.toUpperCase()}</b></h4>
        <p>{item.blurb.text}</p>
      </div>
    ))}
  </div>
);

export default CaseSidebar;
