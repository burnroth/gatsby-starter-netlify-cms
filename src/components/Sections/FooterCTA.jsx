import React from "react";
import lang from "../../../assets/translations/lang.json";
import DemoFormButton from '../Buttons/DemoFormButton'

const FooterCTA = () => (
  <section id="footerCTA">
    <div className="container">
      <div className="row">
      <div className="col-12 d-flex flex-column align-items-center">
      <h2 style={{
        color: "white",
        marginBottom: 40,
        textAlign: "center"
      }} dangerouslySetInnerHTML={{ __html : lang.usps.footerCTA}} />
      <DemoFormButton/>
      </div>
      </div>
    </div>
  </section>
);

export default FooterCTA;
