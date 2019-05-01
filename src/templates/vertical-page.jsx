import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BulletList from "../components/BulletList";
import Button from "../components/Button";
import SEO from "../components/SEO";

export const VerticalPageTemplate = ({
  heroImage,
  title,
  heading,
  description,
  blurbs,
  list,
  usp,
  slug,
  ogImage
}) => (
  <main id="vertical">
    <SEO title={title} desc={description} ogImage={ogImage} slug={slug} />
    <section id="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 hero-copy">
            <h1>
              <strong>Öka din hit rate med Lime CRM</strong>
            </h1>
            <ul>
              <li>
                360 graders vy över kunderna med ERP-koppling och all kunddata
                samlad.
              </li>
              <li>
                Kampanjhantering för mässor, utskick och andra
                marknadsaktiviteter.
              </li>
              <li>
                Effektiv säljstyrning med klassificering och potential på
                kunderna i en enda vy.
              </li>
              <li>…och mycket mer.</li>
            </ul>
            <button
              className="btn btn-white"
              dataToggle="modal"
              dataTarget="#signupModal"
            >
              Testa gratis
            </button>
          </div>
          <div className="col-12 col-md-6 d-none d-md-flex lp-hero-sales" />
        </div>
      </div>
    </section>
    <h2>{title}</h2>

    <Features gridItems={blurbs} />
    <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
    <BulletList listItem={list} />
    <p>{description}</p>

    <Img fluid={heroImage.image.childImageSharp.fluid} alt="Halloj" />

    <h3>{usp.heading}</h3>
    <p>{usp.text}</p>
    <Button buttonText={usp.string} />
  </main>
);

const VerticalPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark;

  return (
    <Layout>
      <VerticalPageTemplate
        heroImage={frontmatter.hero.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        list={frontmatter.hero.list}
        blurbs={frontmatter.intro.blurbs}
        usp={frontmatter.usp}
        slug={fields.slug}
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
        intro {
          blurbs {
            image1 {
              alt
              image{
              childImageSharp {
                fluid(maxWidth: 448, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            }
            rubrik
            text
          }
          heading
        }
        usp {
          heading
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 448, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
          string
          text
        }
      }
    }
  }
`;
