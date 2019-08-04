import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TrialFormButton from "../components/Buttons/TrialFormButton";
import Button from "../components/Buttons/Button";

export const AddonsPageTemplate = ({
  freeTrial,
  readMore,
  getStarted,
  title,
  description,
  hero,
  selection,
  addons,
  engage,
  newsletter,
  field,
  zapier,
  integrations,
  challengeUs
}) => (
  <main id="landingPage">
    <SEO title={title} desc={description} />
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-6 col-vertical-hero">
            <div className="top60">
              <h1
                dangerouslySetInnerHTML={{ __html: hero.heading }}
                className="title-large-light text-white h1-vertical-hero"
              />
              <p>{hero.subHeading} </p>
              <Button buttonColor="btn-white" contactButton={true} />
            </div>
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
    <section id="selections">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{selection.heading} </h2>
          </div>
          {selection.images.map(partner => (
            <div key={Math.random()} className="col-2">
              <Img fluid={partner.image1.image.childImageSharp.fluid} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="addons">
      <div className="container">
        <div className="row">
          {addons.map(item => (
            <div key={Math.random()} className="col-12 col-md-4">
              <Img fixed={item.addon.img.childImageSharp.fixed} />
              <h4>{item.addon.heading} </h4>
              <p>{item.addon.content} </p>
              <a href={`#${item.addon.anchor}`}>{readMore}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="engage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{engage.heading} </h2>
            <p>{engage.subHeading} </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="row d-flex">
              {engage.blocks.map(item => (
                <div className="col-12">
                  <img
                    src={item.block.img.publicURL}
                    alt={item.block.heading}
                  />
                  <h3>{item.block.heading} </h3>
                  <p>{item.block.content} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <Img
              style={{ width: 400 }}
              fluid={engage.image.childImageSharp.fluid}
            />
          </div>
          <div className="col-12">
            <TrialFormButton buttonText={getStarted} />
          </div>
        </div>
      </div>
    </section>
    <section id="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{newsletter.heading} </h2>
            <p>{newsletter.subHeading} </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="row d-flex">
              {newsletter.blocks.map(item => (
                <div className="col-12">
                  <img
                    src={item.block.img.publicURL}
                    alt={item.block.heading}
                  />
                  <h3>{item.block.heading} </h3>
                  <p>{item.block.content} </p>
                </div>
							))}
							<div className="col-12">
          <TrialFormButton buttonText={getStarted} />
        </div>
            </div>
          </div>
          <div className="col-md-8">
            <Img
              style={{ width: 600 }}
              fluid={newsletter.image.childImageSharp.fluid}
            />
          </div>
        </div>
        
      </div>
    </section>
    <section id="field">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{field.heading} </h2>
            <p>{field.subHeading} </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="row d-flex">
              {field.blocks.map(item => (
                <div className="col-12">
                  <img
                    src={item.block.img.publicURL}
                    alt={item.block.heading}
                  />
                  <h3>{item.block.heading} </h3>
                  <p>{item.block.content} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <Img
              style={{ width: 600 }}
              fluid={field.image.childImageSharp.fluid}
            />
          </div>
          <div className="col-12">
            <TrialFormButton buttonText={getStarted} />
          </div>
        </div>
      </div>
    </section>
    <section id="zapier">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <Img fluid={zapier.image.childImageSharp.fluid} />
          </div>
          <div className="col-12 col-md-8">
            <h2>{zapier.heading} </h2>
            <p>{zapier.content} </p>
            <Button contactButton={true} buttonText="Vill du veta mer?" />
          </div>
        </div>
      </div>
    </section>
    <section id="integrations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{integrations.heading} </h2>
            <p>{integrations.subHeading} </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="row d-flex">
              {integrations.blocks.map(item => (
                <div className="col-12">
                  <img
                    src={item.block.img.publicURL}
                    alt={item.block.heading}
                  />
                  <h3>{item.block.heading} </h3>
                  <p>{item.block.content} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <Img
              style={{ width: 600 }}
              fluid={integrations.image.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
    <section id="challengeUs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>
              <strong>{challengeUs.heading} </strong>
            </h2>
            <p>{challengeUs.content} </p>
            <Button contactButton={true} buttonColor="btn-white" />
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
      <AddonsPageTemplate
        freeTrial={translationsJson.buttons.freeTrial}
        contactUs={translationsJson.buttons.contactUs}
        readMore={translationsJson.buttons.readMore}
        getStarted={translationsJson.buttons.getStarted}
        title={frontmatter.title}
        description={frontmatter.description}
        hero={frontmatter.hero}
        selection={frontmatter.selection}
        addons={frontmatter.addons}
        engage={frontmatter.engage}
        newsletter={frontmatter.newsletter}
        field={frontmatter.field}
        zapier={frontmatter.zapier}
        integrations={frontmatter.integrations}
        challengeUs={frontmatter.challengeUs}
      />
    </Layout>
  );
};

export default CRMPage;

export const addonsPageQuery = graphql`
  query AddonsPageTemplate {
    translationsJson {
      buttons {
        freeTrial
        freeDemo
        readMore
        getStarted
        contactUs
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "addons-page" } }) {
      frontmatter {
        title
        description
        hero {
          heading
          subHeading
          image {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            alt
          }
        }
        selection {
          heading
          images {
            image1 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
        addons {
          addon {
            img {
              childImageSharp {
                fixed(height: 50, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
            heading
            content
            anchor
          }
        }
        engage {
          heading
          subHeading
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          blocks {
            block {
              img {
                publicURL
              }
              heading
              content
            }
          }
        }
        newsletter {
          heading
          subHeading
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          blocks {
            block {
              img {
                publicURL
              }
              heading
              content
            }
          }
        }
        field {
          heading
          subHeading
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          blocks {
            block {
              img {
                publicURL
              }
              heading
              content
            }
          }
        }
        zapier {
          heading
          content
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        integrations {
          heading
          subHeading
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          blocks {
            block {
              img {
                publicURL
              }
              heading
              content
            }
          }
        }
        challengeUs {
          heading
          content
        }
      }
    }
  }
`;
