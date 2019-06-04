import React, { Component } from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

class WhySection extends Component {
  render() {
    const { blurbs } = this.props.data.markdownRemark.frontmatter.why;

    return (
      <section id="why">
        <div className="container">
          <div className="row">
            {blurbs.map(item => (
              <div key={Math.random()} className="col-12 col-md-3">
                <img
                  className="icon"
                  src={item.image1.image.publicURL}
                  alt=""
                />
                <h4>{item.rubrik}</h4>
                <p>{item.text}</p>
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
      query WhySectionQuery {
        translationsJson {
          buttons {
            freeDemo
          }
        }
        markdownRemark(frontmatter: { component: { eq: "WhySection" } }) {
          html
          frontmatter {
            component
            why {
              blurbs {
                image1 {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 130, quality: 60) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                      }
                    }
                    id
                    publicURL
                  }
                }
                rubrik
                text
              }
            }
          }
        }
      }
    `}
    render={data => <WhySection data={data} />}
  />
);
