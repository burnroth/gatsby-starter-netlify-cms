import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Button from '../../Buttons/Button'

class SucceedWithCRM extends Component {
  render() {
    const { data } = this.props
    const { html } = data.markdownRemark
    const buttonText = data.translationsJson.buttons.downloadPoster

    return (
      <section id="succeedWithCRM">
        <div className="container">
          <div className="row">
            <div
              className="col-12 content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Button buttonText={buttonText} buttonClass="mx-auto" />
          </div>
        </div>
      </section>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query SucceedWithCRMQuery {
        translationsJson {
          buttons {
            downloadPoster
          }
        }
        markdownRemark(frontmatter: { component: { eq: "SucceedWithCRM" } }) {
          html
          frontmatter {
            component

          }
        }
      }
    `}
    render={(data, count) => <SucceedWithCRM data={data} count={count} />}
  />
)
