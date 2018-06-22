import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'

import Nav from '../UI/Nav/Nav'
import Home from '../../pages/Home/Home'
import GetVendorConsents from '../../pages/GetVendorConsents/GetVendorConsents'
import GetConsentData from '../../pages/GetConsentData/GetConsentData'
import Ping from '../../pages/Ping/Ping'
import GetPublisherConsents from '../../pages/GetPublisherConsents/GetPublisherConsents'
import GetVendorList from '../../pages/GetVendorList/GetVendorList'

import './App.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const Showcase = styled.div`
  margin: 2em 2em 2rem 20.75em;
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Showcase>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/getVendorConsents" component={GetVendorConsents} />
            <Route path="/getConsentData" component={GetConsentData} />
            <Route path="/ping" component={Ping} />
            <Route path="/getPublisherConsents" component={GetPublisherConsents} />
            <Route path="/getVendorList" component={GetVendorList} />
          </Switch>
        </Showcase>
      </Wrapper>
      );
  }
}

export default App