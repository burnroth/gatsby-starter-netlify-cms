import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import References from "../components/References";
import TrialForm from "../components/TrialForm/TrialForm";

export const IndexPageTemplate = ({
  title,
  heading,
  description,
  references,
  heroImage,
  videoSection,
  whyImages
}) => (
  <div>
    <section id="hero" className="gradient">
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            <h1>
              <strong>{title}</strong>
            </h1>
            <p>{description}</p>
          </div>
          <div className="btn-wrapper">
            <Button buttonText="Testa gratis" buttonColor="btn-white" />
            <Button buttonText="Testa gratis" buttonColor="btn-white-ghost" />
          </div>
          <div className="col-12 mx-auto">
            <Img
              fluid={heroImage.image.childImageSharp.fluid}
              alt={heroImage.alt}
            />
            <TrialForm />
          </div>
        </div>
      </div>
    </section>

    <section id="social-proof">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>
              Fler än <strong>40 000</strong> användare har redan Lime CRM
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section id="references">
      <div className="container">
        <References refImg={references} />
      </div>
    </section>

    <section id="video" className="bg-grey">
      <div className="container">
        <div className="row justify-content-between bg-white video-wrapper">
          <div className="col-12 col-lg-5">
            <h2>{videoSection.heading}</h2>
            <p>{videoSection.description}</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="embed-responsive embed-responsive-16by9 header-video shadow">
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${videoSection.videoId}`}
                frameBorder="0"
                title="maggan"
                cc_load_policy="1"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 justify-content-between align-items-center">
            <Button buttonClass="mx-auto" buttonText="Halloj" />
          </div>
        </div>
      </div>
    </section>

    <section id="why">
    <Features gridItems={whyImages} />
    </section>

    <section id="cases">
 
          <BlogRoll />
 
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        heroImage={frontmatter.heroImageHome}
        references={frontmatter.references}
        videoSection={frontmatter.videoSection}
        whyImages={frontmatter.why.blurbs}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        description
        heroImageHome {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
        references {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 130, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
              id
              publicURL
            }
          }
        }
        videoSection {
          heading
          description
          videoId
        }
        why{
          blurbs{
            image1{
              alt
              image{
              childImageSharp {
                fluid(maxWidth: 130, quality: 60) {
                  ...GatsbyImageSharpFluid
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
`;
