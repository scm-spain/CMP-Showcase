import React from 'react'

import styled from 'styled-components'

const CodeBox = styled.pre`
  width: 100%;
  background-color: #EEEEEE;
  padding: 1rem;
`

const code = (props) => (
  <CodeBox>
    <code>
{`${props.code}`}
    </code>
  </CodeBox>
)

export default code