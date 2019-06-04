import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

import './scss/all.scss'
import './Sections/font.css'

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
