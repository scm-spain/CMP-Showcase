import React from 'react'
import CmpBanner from '@s-ui/react-cmp-banner'

const home = () => (
  <div>
    <p>Página de Demo de Schibsted CMP</p>
    <CmpBanner
      companyName="Schibsted"
      logo="https://www.schibsted.com/Web/Frontend/Schibsted/build/images/vectors/logo.svg"
      privacyUrl="whatever.com"
    />
  </div>
)

export default home
