import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BulletList from "../components/BulletList";
import TrialFormButton from "../components/Buttons/TrialFormButton";
import DemoFormButton from "../components/Buttons/DemoFormButton";
import Button from "../components/Buttons/Button";
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
  addon,
  ogImage,
  references,
  caseStudy,
  contact,
  download
}) => (
  <main id="vertical">
    <SEO title={title} desc={description} ogImage={ogImage} />
    <section id="hero">
      <div className="container-fluid container-fluid-vertical-hero">
        <div className="row row-vertical-hero">
          <div className="col-sm-12 col-md-8 col-lg-6 col-vertical-hero">
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
            style={{
              padding: 0
            }}
            className="col-sm-6 col-md-6 col-vertical-hero d-none d-lg-block"
            // style={{
            //   backgroundImage: `url(${hero.image.image.publicURL})`,
            //   backgroundPosition: "center top",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover"
            // }}
          >
            <Img fluid={hero.image.image.childImageSharp.fluid} />
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
            <Img
              alt={usp.image1.alt}
              fluid={usp.image1.image.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
    <Features heading={features.heading} gridItems={blurbs} />

    <section id="addon" className="bg-grey-body btm60">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <Img fixed={addon.image.childImageSharp.fixed} />
          </div>
          <div
            className="col-12 col-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h2>{addon.heading}</h2>
            <p>{addon.content}</p>
            <Button href={addon.href} buttonText={addon.button} />
          </div>
        </div>
      </div>
    </section>

    <section id="caseStudy">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-md-6 col-lg-4">
            <Img
              fluid={caseStudy.image1.image.childImageSharp.fluid}
              alt={caseStudy.image1.alt}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <h2>{caseStudy.heading} </h2>
            <p>{caseStudy.quote}</p>

            <p>
              <i
                style={{
                  color: "#00b3a7",
                  marginTop: 10
                }}
              >
                {caseStudy.quotee}
              </i>
            </p>
            {caseStudy.href ? (
              <Button href={caseStudy.href} buttonText={caseStudy.button} />
            ) : null}
          </div>
        </div>
      </div>
    </section>

    {contact ? (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>{contact.heading} </h2>
              <p> {contact.content} </p>

              {contact.button === "demo" ? (
                <DemoFormButton buttonColor="btn-white" btn- />
              ) : (
                <a className="btn btn-white" href={contact.href}>
                  {contact.button}
                </a>
              )}
            </div>
            <div className="col-12 col-md-6">
              <Img
                fixed={contact.image1.image.childImageSharp.fixed}
                alt={contact.image1.alt}
              />
            </div>
          </div>
        </div>
      </section>
    ) : null}

    <section id="download">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-md-5">
            <Img
              fluid={download.image1.image.childImageSharp.fluid}
              alt={download.image1.alt}
            />
          </div>
          <div className="col-12 col-md-6">
            <h2>{download.heading} </h2>
            <p>{download.content} </p>
            <Button
              href={download.leftButton.href}
              buttonText={download.leftButton.cta}
            />
            <a className="btn btn-turq" href={download.rightButton.href}>
              {download.rightButton.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
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
        addon={frontmatter.addon}
        slug={fields.slug}
        references={frontmatter.references}
        caseStudy={frontmatter.caseStudy}
        contact={frontmatter.contact}
        download={frontmatter.download}
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
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          string
          text
        }
        addon {
          href
          heading
          content
          button
          image {
            childImageSharp {
              fixed(width: 540, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
        caseStudy {
          heading
          quote
          quotee
          button
          href
          image1 {
            image {
              childImageSharp {
                fluid(maxWidth: 350, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            alt
          }
        }
        contact {
          heading
          content
          button
          href
          image1 {
            image {
              childImageSharp {
                fixed(height: 282, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
        download {
          heading
          content
          leftButton {
            cta
            href
          }
          rightButton {
            cta
            href
          }
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
