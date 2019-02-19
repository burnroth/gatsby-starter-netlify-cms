import React from 'react'
import PropTypes from 'prop-types'
import { KunderTemplate } from '../../templates/kunder'

const KunderPreview = ({ entry, widgetFor }) => (
  <KunderTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

KunderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default KunderPreview
