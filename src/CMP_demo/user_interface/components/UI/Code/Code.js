import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'code'

const code = props => (
  <pre className={`${baseClass}`}>
    <code>{`${props.code}`}</code>
  </pre>
)

code.propTypes = {
  code: PropTypes.string
}

export default code
