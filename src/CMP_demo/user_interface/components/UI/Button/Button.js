import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'btn'

const button = props => (
  <button className={`${baseClass}`} onClick={props.clicked}>
    {props.label}
  </button>
)

button.propTypes = {
  clicked: PropTypes.func,
  label: PropTypes.string
}

export default button
