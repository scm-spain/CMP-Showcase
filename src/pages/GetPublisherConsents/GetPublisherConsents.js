import React from 'react'
import Title from '../../components/UI/PageTitle/PageTitle'
import Button from '../../components/UI/Button/Button'
import Code from '../../components/UI/Code/Code'

import styled from 'styled-components'

const Subtitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
`

const Output = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #BBBBBB;
`

const WrapperButtons = styled.div`
  a:first-child {
    margin-right: 1.5rem;
  }
`

const getPublisherConsents = () => (
  <div>
    <Title title='Get Publisher Consents' />
    <Subtitle>Code</Subtitle>
    <Code code={
`example code
example code
example code`
    } />
    <Subtitle>My Logger Output</Subtitle>
    <Output></Output>
    <WrapperButtons>
      <Button label='Execute' />
      <Button label='Clear' />
    </WrapperButtons>
  </div>
)

export default getPublisherConsents