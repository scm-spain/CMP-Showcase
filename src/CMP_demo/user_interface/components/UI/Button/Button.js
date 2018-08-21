import React from 'react'

import { Btn } from './Button-styles'

const button = (props) => (
  <Btn onClick={props.clicked} >{props.label}</Btn>
)

export default button