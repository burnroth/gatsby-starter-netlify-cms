import React from "react";

const CaseSidebar = ({ content }) => (
  <div id="CaseSidebar" className="row">
    {content.map(item => (
      <div key={item.blurb.image.id} className="col-12">
        <img src={item.blurb.image.publicURL} alt={item.blurb.image.rubrik} />
        <h2>{item.blurb.rubrik}</h2>
        <p>{item.blurb.text}</p>
      </div>
    ))}
  </div>
);

export default CaseSidebar;
