import React, { Component } from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

class WhySection extends Component {
  render() {
    const { blurbs } = this.props.data.markdownRemark.frontmatter.why;

    return (
      <div className="container">
        <div className="row">
          {blurbs.map(item => (
            <div
              key={Math.random()}
              className="col-12 col-md-3 text-center"
            >
              {/* <Img
                fluid={item.image1.image.childImageSharp.fluid}
                alt={item.image1.alt}
              /> */}
              <img src={item.image1.image.publicURL} alt=""/>
              <h2>{item.rubrik}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
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
