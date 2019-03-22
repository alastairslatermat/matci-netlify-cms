import React from 'react'
import PropTypes from 'prop-types'
import { GlossaryItemTemplate } from '../../templates/glossary-item'

const GlossaryItemPreview = ({ entry, widgetFor }) => (
  <GlossaryItemTemplate
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

GlossaryItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GlossaryItemPreview
