import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

class ReferenceGrid extends Component {
  render() {
    const { data } = this.props;
    const references = data.markdownRemark.frontmatter.references;

    return (
      <section id="references">
        <div className="container">
          <div className="row">
            {references.map(reference => (
              <div key={reference.image1.image.id} className="col-6 col-md-2">
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

export default () => (
  <StaticQuery
    query={graphql`
      query ReferenceGridQuery {
        markdownRemark(frontmatter: { component: { eq: "ReferenceGrid" } }) {
          frontmatter {
            component
            references {
              image1 {
                alt
                image {
                  childImageSharp {
                    fixed(width: 130, height: 86, quality: 60) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                  id
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ReferenceGrid data={data} count={count} />}
  />
);
