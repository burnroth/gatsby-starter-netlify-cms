import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import SEO from "../components/SEO";

export const CustomersPageTemplate = ({ title, description, slug }) => (
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
  const { buttons } = data.translationsJson;
  return (
    <Layout>
      <CustomersPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        freeTrial={buttons.freeTrial}
        freeDemo={buttons.freeDemo}
        readMore={buttons.readMore}
        slug={data.markdownRemark.fields.slug}
      />
    </Layout>
  );
};

export default CustomersPage;

export const pageQuery = graphql`
  query CustomersPageTemplate {
  translationsJson {
    buttons {
      freeTrial
      freeDemo
      readMore
      download
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
