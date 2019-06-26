import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import TrialFormButton from '../../Buttons/TrialFormButton'
import DemoFormButton from '../../Buttons/DemoFormButton'

class Hero extends Component {
  render() {
    const { data } = this.props
    const { freeDemo, freeTrial } = data.translationsJson.buttons
    const { heroImage1, heading, description } = data.markdownRemark.frontmatter

    return (
      <section id="hero" className="bg-turq">
        <div className="container">
          <div className="row">
            <div className="col-12 justify-content-center">
              <h1 onClick={this.handleClick}>
                <strong>{heading}</strong>
              </h1>
              <p>{description}</p>
            </div>
            <div className="btn-wrapper">
              <TrialFormButton
                onClick={this.handleClick}
                buttonText={freeTrial}
                buttonColor="btn-white"
                id="trial"
              />
              <DemoFormButton
                onClick={this.handleClick}
                buttonText={freeDemo}
                buttonColor="btn-white-ghost"
                id="demo"
              />
            </div>
            <div className="col-12 mx-auto">
              <Img
                fluid={heroImage1.image.childImageSharp.fluid}
                alt={heroImage1.alt}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        translationsJson {
          buttons {
            freeDemo
            freeTrial
          }
        }
        markdownRemark(frontmatter: { component: { eq: "Hero" } }) {
          html
          frontmatter {
            component
            heading
            description
            heroImage1 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 1100, quality: 60) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Hero data={data} count={count} />}
  />
)
