import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import SEO from "../components/SEO";

export const CustomersPageTemplate = ({
  title,
  description,
  slug,
  subtitle
}) => (
  <main id="customers">
    <SEO title={`Lime CRM - ${title}`} desc={description} slug={slug} />
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="cases">
      <div className="container">
        <div style={{
          marginTop: 100
        }} className="row">
          <div className="col-12">
            <BlogRoll />
          </div>
        </div>
      </div>
    </section>
  </main>
);

const CustomersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { buttons } = data.translationsJson;
  return (
    <Layout>
      <CustomersPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
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
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "customers-page" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        description
      }
    }
  }
`;
