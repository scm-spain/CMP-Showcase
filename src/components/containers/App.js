import React, { Component } from "react"

import Nav from '../UI/Nav/Nav'

import './App.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const Showcase = styled.div`
  margin: 2rem;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Showcase>
          <p>Schibsted CMP showcase</p>
        </Showcase>
      </Wrapper>
      );
  }
}

export default App