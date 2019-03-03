import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.scss'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>

        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
