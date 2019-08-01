import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

class ResultsFromCRM extends Component {
  render() {
    const { data } = this.props;
    const { heading, subHeading, why } = data.markdownRemark.frontmatter;

    return (
      <section id="resultsFromCRM">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{heading} </h2>
              <p>{subHeading} </p>
            </div>
            {why.blurbs.map(textBlock => (
              <div className="col-md-6" key={textBlock.icon.id}>
                <img className="icon" src={textBlock.icon.publicURL} alt="" />
                <h4> {textBlock.heading} </h4>
                <p> {textBlock.text} </p>
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
      query ResultsFromCRMQuery {
        
        translationsJson {
          buttons {
            downloadPoster
          }
        }

        markdownRemark(frontmatter: { component: { eq: "ResultsFromCRM" } }) {
          frontmatter {
            component
            heading
            subHeading
            why {
              blurbs {
                icon{
                  publicURL
                  id
                }
                heading
                text
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ResultsFromCRM data={data} count={count} />}
  />
);