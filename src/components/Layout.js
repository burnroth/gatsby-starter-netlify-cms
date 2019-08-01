import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

import '../../assets/scss/imports.scss'
import '../../assets/font.css'

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
