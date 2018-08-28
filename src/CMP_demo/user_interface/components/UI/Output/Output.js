import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'codeBox'

const code = props => {
  let output = ''
  if (props.output)
    output = `Success: ${props.output.success}\nData:\n${props.output.data}`

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
