import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 2rem;
  padding-top: 2rem;
  width: 18.75rem;
  background-color: #00518F;

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  a:not(:last-child) {
    margin-bottom: 1rem;
  }

  .active {
    color: #5ca7e0;
  }
`

const nav = () => (
  <div>
    <Navigation>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/getVendorConsents">getVendorConsents</NavLink>
      <NavLink to="/getConsentData">getConsentData</NavLink>
      <NavLink to="/ping">ping</NavLink>
      <NavLink to="/getPublisherConsents">getPublisherConsents</NavLink>
      <NavLink to="/getVendorList">getVendorList</NavLink>
    </Navigation>
  </div>
)

export default nav