import React, { Component } from "react";
import Image from "gatsby-image";

class DynamicReferenceGrid extends Component {
  render() {
    const { references } = this.props;

    return (
      <section id="references">
        <div className="container">
          <div className="row justify-content-center">
            {references.map(reference => (
              <div key={Math.random()} className="col-6 col-md-2">
                <Image
                  fixed={reference.image1.image.childImageSharp.fixed}
                  alt={reference.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default DynamicReferenceGrid;
  