import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="container">
      <div className="row">
      {posts && (posts
          .map(({ node: post }) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card-customer">
              <div className="card-image">
                <Img fixed={post.frontmatter.linkedinbild.childImageSharp.fixed}/>

              </div>
              <div className="card-body">
                <h3>{post.frontmatter.title}
                </h3>
                <h4>{post.frontmatter.subtitle}</h4>
                <p>
                  {post.excerpt}
                </p>
                <Link className="button" to={post.fields.slug}>Läs mer</Link>
              </div>
              <div className="card-btn">
                <button to={post.fields.slug} className="btn btn-turq-ghost">Läs mer</button>
              </div>
            </div>
          </div>
          )))}
          </div>
          </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "case-page" } }}
        limit: 3,
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              linkedinbild{
            childImageSharp {
              fixed(width: 350, height:220, quality: 60) {
                ...GatsbyImageSharpFixed
              }
            }
            publicURL
          }
              metaDescription
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)
