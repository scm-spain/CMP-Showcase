import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'codeBox'

const code = props => (
  <pre className={`${baseClass}`}>
    <code>{`${props.output}`}</code>
  </pre>
)

code.propTypes = {
  output: PropTypes.string
}

export default code
