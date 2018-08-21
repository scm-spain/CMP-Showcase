import React from 'react'

import { CodeBox } from './Output-styles'

const code = (props) => (
  <CodeBox>
    <code>
{`${props.output}`}
    </code>
  </CodeBox>
)

export default code