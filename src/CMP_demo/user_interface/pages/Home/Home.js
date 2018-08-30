import React from 'react'
import CmpBanner from '@s-ui/react-cmp-banner'

const baseClass = 'page-home'

const home = () => (
  <div className={`${baseClass}`}>
    <img src="https://raw.githubusercontent.com/scm-spain/CMP/feature/develop-v1.0.0/resources/logo/boros_logo.png" />
    <CmpBanner
      companyName="Schibsted"
      logo="https://www.schibsted.com/Web/Frontend/Schibsted/build/images/vectors/logo.svg"
      privacyUrl="whatever.com"
    />
  </div>
)

export default home
