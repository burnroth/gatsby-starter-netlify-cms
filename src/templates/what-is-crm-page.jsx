import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TrialFormButton from "../components/Buttons/TrialFormButton";
import Button from "../components/Buttons/Button";

export const WhatIsCRMPageTemplate = ({
  freeTrial,
  contactUs,
  readMore,
  getStarted,
  title,
  description,
  hero,
  theory,
  praxis,
  benefits
}) => (
  <main id="landingPage">
    <SEO title={title} desc={description} />
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-vertical-hero">
            <div className="top60">
              <strong>
                <h1 dangerouslySetInnerHTML={{ __html: hero.heading }} />
              </strong>
              <p>{hero.subHeading} </p>
              <Button buttonColor="btn-white" contactButton={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="theory">
      <div className="container">
        <div className="row">
          <div className="col-12">{theory.heading}</div>
          <div className="col-12 col-md-6">
            <q>{theory.quote}</q>
          </div>
          <div className="col-12 col-md-6">{theory.content}</div>
        </div>
      </div>
    </section>
    <section id="praxis">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{praxis.heading}</h2>
            <Img
              style={{ maxWidth: 400 }}
              fluid={praxis.image.childImageSharp.fluid}
            />
          </div>
          {praxis.blocks.map(item => (
            <div className="col-12 col-md-4">
              <img src={item.block.icon.publicURL} alt="" />
              <h3>{item.block.heading}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.block.content }} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="benefits">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2></h2>

          </div>
          {benefits.blocks.map(item=>(
            <div className="col-12">
              <img src={item.block.icon.publicURL} alt=""/>
              <h3>
                {item.block.heading}
              </h3>
              <p>
                {item.block.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const AddonsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { translationsJson } = data;
  return (
    <Layout>
      <WhatIsCRMPageTemplate
        freeTrial={translationsJson.buttons.freeTrial}
        contactUs={translationsJson.buttons.contactUs}
        readMore={translationsJson.buttons.readMore}
        getStarted={translationsJson.buttons.getStarted}
        title={frontmatter.title}
        description={frontmatter.description}
        hero={frontmatter.hero}
        theory={frontmatter.theory}
        praxis={frontmatter.praxis}
        benefits={frontmatter.benefits}
      />
    </Layout>
  );
};

export default AddonsPage;

export const addonsPageQuery = graphql`
  query WhatIsCRMPageTemplate {
    translationsJson {
      buttons {
        freeTrial
        freeDemo
        readMore
        getStarted
        contactUs
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "what-is-crm-page" } }) {
      frontmatter {
        title
        description
        hero {
          heading
          subHeading
        }
        theory {
          heading
          content
          quote
        }
        praxis {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          blocks {
            block {
              icon {
                publicURL
              }
              heading
              content
            }
          }
        }
        benefits {
            blocks {
              block {
                icon {
                  publicURL
                }
                heading
                content
              }
            }
          }
      }
    }
  }
`;
