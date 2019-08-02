import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SEO from "../components/SEO";
import Button from "../components/Buttons/Button";

export const GDPRtemplate = ({
  content,
  contentComponent,
  description,
  title,
  hero
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main id="gdpr">
      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1>{hero.heading} </h1>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>
      </section>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

const Case = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GDPRtemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        hero={post.frontmatter.hero}
      />
    </Layout>
  );
};

export default Case;

export const gdprPageQuery = graphql`
  query gdprPage {
    markdownRemark(frontmatter: { templateKey: { eq: "gdpr-page" } }) {
      html
      frontmatter {
        title
        hero {
          heading
          content
        }
      }
    }
  }
`;
