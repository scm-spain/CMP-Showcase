import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'codeBox'

const code = props => {
  let output = ''
  if (props.output)
    output = `success: ${props.output.success}\ndata:\n${props.output.data}`

  return (
    <pre className={`${baseClass}`}>
      <code>{`${output}`}</code>
    </pre>
  )
}

code.propTypes = {
  output: PropTypes.string
}

export default code
