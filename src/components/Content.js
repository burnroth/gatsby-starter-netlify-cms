import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content }) => (
  <div className="row" >
  <div className="col-12" dangerouslySetInnerHTML={{ __html: content }}>
  </div>
  </div>
)

const Content = ({ content }) => (
  <div className="row">
    <div className="col-12">
    {content}
    </div>
  </div>
)

Content.propTypes = {
  content: PropTypes.node,
}

HTMLContent.propTypes = Content.propTypes

export default Content