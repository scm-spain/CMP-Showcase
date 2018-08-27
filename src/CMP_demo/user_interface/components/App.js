import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Nav from './UI/Nav/Nav'
import Home from '../pages/Home/Home'
import GetVendorConsents from '../pages/methodPages/GetVendorConsents/GetVendorConsents'
import GetConsentData from '../pages/methodPages/GetConsentData/GetConsentData'
import Ping from '../pages/methodPages/Ping/Ping'
import GetPublisherConsents from '../pages/methodPages/GetPublisherConsents/GetPublisherConsents'
import GetVendorList from '../pages/methodPages/GetVendorList/GetVendorList'
import configuration from '../pages/documentationPages/configuration/configuration'

const baseClass = 'routerApp'

class App extends Component {
  render() {
    return (
      <div className={`${baseClass}`}>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/getVendorConsents" component={GetVendorConsents} />
            <Route path="/getConsentData" component={GetConsentData} />
            <Route path="/ping" component={Ping} />
            <Route
              path="/getPublisherConsents"
              component={GetPublisherConsents}
            />
            <Route path="/getVendorList" component={GetVendorList} />
            <Route path="/configuration" component={configuration} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
