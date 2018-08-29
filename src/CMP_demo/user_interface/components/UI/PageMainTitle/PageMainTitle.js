import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'title'

const pageTitle = props => (
  <div>
    <h2 className={`${baseClass}`}>{props.title}</h2>
  </div>
)

pageTitle.propTypes = {
  title: PropTypes.string
}

export default pageTitle
