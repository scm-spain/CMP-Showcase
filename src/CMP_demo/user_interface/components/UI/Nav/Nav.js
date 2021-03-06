import React from 'react'
import {NavLink} from 'react-router-dom'

const baseClass = 'navigation'

const nav = () => (
  <div>
    <div className={`${baseClass}`}>
      <NavLink to="/" exact>
        Boros
      </NavLink>
      <div className={`${baseClass}-subtitle`}>Documentation</div>
      <NavLink to="/configuration">Configuration</NavLink>
      <div className={`${baseClass}-subtitle`}>Method examples</div>
      <NavLink to="/getVendorConsents">getVendorConsents</NavLink>
      <NavLink to="/getConsentData">getConsentData</NavLink>
      <NavLink to="/ping">ping</NavLink>
      <NavLink to="/getPublisherConsents">getPublisherConsents</NavLink>
      <NavLink to="/getVendorList">getVendorList</NavLink>
    </div>
  </div>
)

export default nav
