import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import DemoFormButton from "../../Buttons/DemoFormButton";

class VideoWithText extends Component {
  render() {
    const { data } = this.props;
    const { html, frontmatter } = data.markdownRemark;

    return (
      <section id="video" className="bg-grey">
        <div className="container">
          <div className="row justify-content-between bg-white video-wrapper">
            <div
              className="col-12 col-md-6 content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="col-12 col-lg-6">
              <div className="embed-responsive embed-responsive-16by9 header-video shadow">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${frontmatter.videoId}`}
                  frameBorder="0"
                  cc_load_policy="1"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              style={{ marginTop: 40 }}
              className="col-12 justify-content-between align-items-center"
            >
              <DemoFormButton buttonClass="mx-auto" buttonColor="btn-turq" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query VideoWithTextQuery {
        translationsJson {
          buttons {
            freeDemo
          }
        }
        markdownRemark(frontmatter: { component: { eq: "VideoWithText" } }) {
          html
          frontmatter {
            component
            videoId
          }
        }
      }
    `}
    render={data => <VideoWithText data={data} />}
  />
);
