import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BulletList from "../components/BulletList";
import TrialFormButton from "../components/Buttons/TrialFormButton";
import SEO from "../components/SEO";
import DynamicReferenceGrid from "../components/DynamicReferenceGrid";

export const VerticalPageTemplate = ({
  hero,
  title,
  heading,
  description,
  blurbs,
  features,
  list,
  usp,
  slug,
  ogImage,
  references
}) => (
  <main id="vertical">
    <SEO title={title} desc={description} ogImage={ogImage} />
    <section id="hero">
      <div className="container-fluid container-fluid-vertical-hero">
        <div className="row row-vertical-hero">
          <div className="col-sm-12 col-md-6 col-vertical-hero">
            <div className="heading-vertical">
              <h1 className="title-large-light text-white h1-vertical-hero">
                <strong>{hero.heading} </strong>
              </h1>
              <BulletList listItem={list} />
              <TrialFormButton
                buttonColor="btn-white"
                buttonText={usp.string}
              />
            </div>
          </div>
          <div
            className="col-sm-6 hidden-xs col-md-6 hidden-sm col-vertical-hero"
            style={{
              backgroundImage: `url(${hero.image.image.publicURL})`,
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="lp-hero-overlay" />
          </div>
        </div>
      </div>
    </section>
    <DynamicReferenceGrid references={references} />
    <section id="usp">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2>{usp.heading}</h2>
            <p>{usp.text} </p>
            <TrialFormButton buttonText={usp.string} />
          </div>
          <div className="col-12 col-md-6 order-first order-md-last">
            <Img alt={usp.image1.alt} fluid={usp.image1.image.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
    <Features heading={features.heading} gridItems={blurbs} />

    <TrialFormButton />
  </main>
);

const VerticalPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark;

  return (
    <Layout>
      <VerticalPageTemplate
        hero={frontmatter.hero}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        list={frontmatter.hero.list}
        blurbs={frontmatter.features.blurbs}
        features={frontmatter.features}
        usp={frontmatter.usp}
        slug={fields.slug}
        references={frontmatter.references}
      />
    </Layout>
  );
};
export default VerticalPage;

export const verticalPageQuery = graphql`
  query VerticalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        heading
        description
        hero {
          heading
          image {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            alt
          }
          list {
            listObject
          }
        }
        references {
          image1 {
            alt
            image {
              childImageSharp {
                fixed(width: 130, height: 86, quality: 60) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
        features {
          heading
          blurbs {
            image1 {
              alt
              image {
                publicURL
              }
            }
            rubrik
            text
          }
        }
        usp {
          heading
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 540, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          string
          text
        }
      }
    }
  }
`;
