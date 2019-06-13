import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="container">
        <div className="row">
          {posts &&
            posts.map(({ node: post }) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="card-customer">
                  <div className="card-image">
                    <Link className="" to={post.fields.slug}>
                      <Img
                        fixed={
                          post.frontmatter.card.childImageSharp.fixed
                        }
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <h3>{post.frontmatter.title}</h3>
                    <h4>{post.frontmatter.subtitle}</h4>
                    <p>{post.frontmatter.quote}</p>
                    <Link className="btn btn-turq button" to={post.fields.slug}>
                      Läs mer
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-page" } } }
          limit: 3
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                card {
                  childImageSharp {
                    fixed(width: 350, height: 220, quality: 100) {
                      ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                  }
                  publicURL
                }
                metaDescription
                quote
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
