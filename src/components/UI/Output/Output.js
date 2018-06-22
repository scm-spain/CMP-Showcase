import React from 'react'

import styled from 'styled-components'

const CodeBox = styled.pre`
  max-width: 100%;
  padding: 1rem;
  border: 1px solid #BBBBBB;
`

const code = (props) => (
  <CodeBox>
    <code>
{`${props.output}`}
    </code>
  </CodeBox>
)

export default code