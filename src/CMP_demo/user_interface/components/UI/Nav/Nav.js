import React from 'react'
import { NavLink } from 'react-router-dom'

import { Navigation, Subtitle } from './Nav-styles'

const nav = () => (
  <div>
    <Navigation>
      <NavLink to="/" exact>Schibsted CMP showcase</NavLink>
      <Subtitle>Documentation</Subtitle>
      <NavLink to="#">Lorem Ipsum</NavLink>
      <NavLink to="#">Lorem Ipsum</NavLink>
      <NavLink to="#">Lorem Ipsum</NavLink>
      <Subtitle>Method examples</Subtitle>
      <NavLink to="/getVendorConsents">getVendorConsents</NavLink>
      <NavLink to="/getConsentData">getConsentData</NavLink>
      <NavLink to="/ping">ping</NavLink>
      <NavLink to="/getPublisherConsents">getPublisherConsents</NavLink>
      <NavLink to="/getVendorList">getVendorList</NavLink>
      <Subtitle>Demo</Subtitle>
      <NavLink to="#">Lorem Ipsum</NavLink>
    </Navigation>
  </div>
)

export default nav