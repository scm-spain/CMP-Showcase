import React from 'react'

import { CodeBox } from './Code-styles';

const code = (props) => (
  <CodeBox>
    <code>
{`${props.code}`}
    </code>
  </CodeBox>
)

export default code