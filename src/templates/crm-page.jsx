import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export const crmPageTemplate = ({ title, description, whyImages }) => (
  <main id="landingPage">

  </main>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <crmPageTemplate
      
        title={frontmatter.title}
        description={frontmatter.description}
        slug={fields.slug}
      />
    </Layout>
  );
};

export default IndexPage;

export const crmPageQuery = graphql`
  query crmPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {

      frontmatter {
        title
        heading
        description
      }
    }
  }
`;
