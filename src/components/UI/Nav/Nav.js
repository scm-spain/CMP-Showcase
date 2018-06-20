import React from 'react'

import styled from 'styled-components'

const Navigation = styled.ul`
  padding-top: 2rem;
  padding-left: 2rem;
  background-color: #00518F;
  color: #FFFFFF;
  height: 100vh;
  width: 18.75rem;
  
  li {
    list-style-type: none;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const nav = () => (
  <div>
    <Navigation>
      <li>getVendorConsents</li>
      <li>getConsentData</li>
      <li>ping</li>
      <li>getPublisherConsents</li>
      <li>getVendorList</li>
    </Navigation>
  </div>
)

export default nav