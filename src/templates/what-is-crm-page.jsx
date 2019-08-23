import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TrialFormButton from "../components/Buttons/TrialFormButton";
import DemoFormButton from "../components/Buttons/DemoFormButton";
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
  benefits,
  myths,
  demoSection
}) => (
  <main id="landingPage">
    <SEO title={title} desc={description} />
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-vertical-hero">
            <div className="top60">
              <h1 dangerouslySetInnerHTML={{ __html: hero.heading }} />
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
          <div className="col-12">
            <h2>{theory.heading}</h2>
          </div>
          <div className="col-12 col-md-6">
            <q>{theory.quote}</q>
          </div>
          <div className="col-12 col-md-6">
            <p dangerouslySetInnerHTML={{ __html: theory.content }} />
          </div>
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
            <h2>{benefits.heading} </h2>
          </div>
          {benefits.blocks.map(item => (
            <div className="col-12">
              <img src={item.block.icon.publicURL} alt="" />
              <h3>{item.block.heading}</h3>
              <p>{item.block.content}</p>
            </div>
          ))}
          <div className="col-12">
          <TrialFormButton />
          </div>
        </div>
      </div>
    </section>
    <section id="myths">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{myths.heading}</h2>
          </div>
          {myths.blocks.map(item => (
            <div className="col-12">
              <img src={item.block.icon.publicURL} alt="" />
              <h3>{item.block.heading}</h3>
              <p>{item.block.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="demoSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>
              <strong>{demoSection.heading}</strong>
            </h2>
            <p>
              {demoSection.content}
            </p>
            <DemoFormButton buttonColor="btn-turq" />
          </div>
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
        myths={frontmatter.myths}
        demoSection={frontmatter.demoSection}
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
          heading
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
        myths {
          heading
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
        demoSection {
          heading
          content
        }
      }
    }
  }
`;
