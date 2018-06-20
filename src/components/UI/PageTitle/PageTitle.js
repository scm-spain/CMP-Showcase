import React from 'react'

import styled from 'styled-components'

const Title = styled.h2`
  color: #00518F;
`

const pageTitle = (props) => (
  <div>
    <Title>{props.title}</Title>
  </div>
)

export default pageTitle