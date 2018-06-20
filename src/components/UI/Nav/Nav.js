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
    position: relative;
    color: #FFFFFF;
    text-decoration: none;

    &:after {
      position: absolute;
      bottom: -7px;
      left: 0;
      content: '';
      background-color: #b7f0ff;
      height: 2px;
      width: 0;
      transition: width .3s, height 1s;
    }

    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }

    &:hover {
      &:after {
        width: 200px;
      }
    }
    
    ${'' /* Just apply to the title */}
    &:first-child {
      font-weight: bold;
      font-size: 1.6em;
      color: #b7f0ff;
      margin-bottom: 1.5rem;

      &:after {
        content: none;
      }
    }
  }

  .active {
    color: #b7f0ff;
    &:after {
      position: absolute;
      bottom: -7px;
      left: 0;
      content: '';
      background-color: #b7f0ff;
      height: 2px;
      width: 0 !important;
      transition: width .3s;
    }
  }
`

const nav = () => (
  <div>
    <Navigation>
      <NavLink to="/" exact>Schibsted CMP showcase</NavLink>
      <NavLink to="/getVendorConsents">getVendorConsents</NavLink>
      <NavLink to="/getConsentData">getConsentData</NavLink>
      <NavLink to="/ping">ping</NavLink>
      <NavLink to="/getPublisherConsents">getPublisherConsents</NavLink>
      <NavLink to="/getVendorList">getVendorList</NavLink>
    </Navigation>
  </div>
)

export default nav