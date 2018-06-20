import React from 'react'

import styled from 'styled-components'

const Btn = styled.a`
  background-color: #00518f;
  color: #FFF;
  padding: .6rem 1.2rem;
  border-radius: 10px;
  transition: background-color .4s;
  cursor: pointer;

  &:hover {
    background-color: #4b7391;
  }
`

const button = (props) => (
  <Btn>{props.label}</Btn>
)

export default button