import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ReferenceGrid from "../components/ReferenceGrid";
import Pyramid from "../components/HomePage/Pyramid";
import Hero from "../components/HomePage/Hero";
import SEO from "../components/SEO";

export const IndexPageTemplate = ({
  title,
  description,
  videoSection,
  whyImages,
  slug
}) => (
  <div>
    <SEO title={title} desc={description} slug={slug} />
    <Hero />
    <ReferenceGrid />
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
    <Pyramid />
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark;
  const { buttons } = data.translationsJson;
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
        testForFree={buttons.testForFree}
        freeDemo={buttons.freeDemo}
        slug={fields.slug}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    translationsJson {
      buttons {
        testForFree
        freeDemo
        readMore
        download
        login
      }
      usps {
        numberOfUsers
      }
    }

    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      fields {
        slug
      }
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
                fixed(width: 130, height: 86, quality: 60) {
                  ...GatsbyImageSharpFixed
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
        why {
          blurbs {
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
            rubrik
            text
          }
        }
      }
    }
  }
`;
