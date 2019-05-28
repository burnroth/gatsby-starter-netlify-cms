import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Button from "../Buttons/Button";

class Pyramid extends Component {
  render() {
    const { data } = this.props;
    const { html, frontmatter } = data.markdownRemark;
    const buttonText = data.translationsJson.buttons.freeDemo

    return (
      <section id="pyramid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                fluid={frontmatter.pyramidImg.image.childImageSharp.fluid}
              />
            </div>
            <div
              className="col-12 col-md-6 content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Button buttonText={buttonText} buttonClass="mx-auto"/>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query PyramidQuery {
        translationsJson {
          buttons {
            freeDemo
          }
        }
        markdownRemark(frontmatter: { component: { eq: "Pyramid" } }) {
          html
          frontmatter {
            component
            pyramidImg {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 445, quality: 60) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Pyramid data={data} count={count} />}
  />
);
