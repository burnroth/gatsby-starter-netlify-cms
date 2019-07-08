import React from "react";
import lang from "../../assets/translations/lang.json"

const usp = lang.usps.numberOfUsers

const SocialProof = () => (
  <section id="social-proof">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2>
            {usp}
          </h2>
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
