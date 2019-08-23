import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TrialFormButton from "../components/Buttons/TrialFormButton";
import Button from "../components/Buttons/Button";
import Features from "../components/Features";

export const CRMPageTemplate = ({
  title,
  description,
  hero,
  features,
  freeTrial,
  usp
}) => (
  <main id="landingPage">
    <SEO title={title} desc={description} />
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <h1
              dangerouslySetInnerHTML={{ __html: hero.heading }}
              className="title-large-light text-white h1-vertical-hero"
            />
            <TrialFormButton buttonColor="btn-white" buttonText={freeTrial} />
          </div>
          <div
            style={{
              padding: 0
            }}
            className="col-sm-6 col-md-6 col-vertical-hero d-none d-lg-block"
          >
            <Img
              style={{
                width: 600,
                alignSelf: "center"
              }}
              fluid={hero.image.image.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
    <Features heading={features.heading} gridItems={features.blurbs} />
    <TrialFormButton wrapperClass="justify-content-center btm40" />
    <section style={{ backgroundColor: "#f5f5f5" }} id="usp">
      <div className="container">
        <div className="row">
          <div
            style={{
              alignSelf: "center"
            }}
            className="col-12 col-md-5 justify-content-center"
          >
            <h1
              style={{
                margin: "auto",
                display: "flex",
                color: "#00b3a7",
                fontSize: 150,
                fontWeight: 700,
                lineHeight: "165px"
              }}
            >
              {usp.leftColNumber}
            </h1>
            <p
              style={{
                margin: "auto",
                display: "flex"
              }}
            >
              {usp.leftColString}
            </p>
          </div>
          <div className="col-12 col-md-7">
            <h2>{usp.heading}</h2>
            <p dangerouslySetInnerHTML={{ __html: usp.content }} />
            <Button href={usp.buttonHref} buttonText={usp.buttonText} />
          </div>
        </div>
      </div>
    </section>
  </main>
);

const CRMPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { translationsJson } = data;
  return (
    <Layout>
      <CRMPageTemplate
        freeTrial={translationsJson.buttons.freeTrial}
        title={frontmatter.title}
        description={frontmatter.description}
        hero={frontmatter.hero}
        features={frontmatter.features}
        usp={frontmatter.usp}
      />
    </Layout>
  );
};

export default CRMPage;

export const crmPageQuery = graphql`
  query CRMPageTemplate {
    translationsJson {
      buttons {
        freeTrial
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "crm-page" } }) {
      frontmatter {
        title
        description
        hero {
          heading
          image {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            alt
          }
        }
        features {
          heading
          blurbs {
            rubrik
            text
            image1 {
              image {
                publicURL
              }
              alt
            }
          }
        }
        usp {
          heading
          content
          buttonText
          buttonHref
          leftColNumber
          leftColString
        }
      }
    }
  }
`;
