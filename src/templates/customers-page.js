import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import References from "../components/References";
import SEO from "../components/SEO";
import TrialForm from "../components/TrialForm/TrialForm";

export const CustomersPageTemplate = ({
  title,
  description,
  slug
}) => (
  <div>
    <SEO title={title} desc={description} slug={slug} />
    <section id="cases">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1>{description}</h1>
            <BlogRoll />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const CustomersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { translations } = data.allSeJson.edges[0].node;
  return (
    <Layout>
      <CustomersPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        testForFree={translations.testForFree}
        freeDemo={translations.freeDemo}
        readMore={translations.readMore}
        slug={data.markdownRemark.fields.slug}
      />
    </Layout>
  );
};

export default CustomersPage;

export const pageQuery = graphql`
  query CustomersPageTemplate {
    allSeJson {
      edges {
        node {
          translations {
            testForFree
            freeDemo
            numberOfUsers
            readMore
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "customers-page" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        heading
        description
      }
    }
  }
`;
