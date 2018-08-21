import React, { Component } from "react"
import Title from '../../components/UI/PageMainTitle/PageMainTitle'
import Button from '../../components/UI/Button/Button'
import Code from '../../components/UI/Code/Code'
import Output from '../../components/UI/Output/Output'

import { Subtitle, WrapperButtons } from '../MethodPages-styles'

class GetPublisherConsents extends Component {
  state = {
    getPublisherConsentsResponse: ''
  }

  handleGetPublisherConsents = () => {
    window.__cmp('getPublisherConsents', null, (result) => {
      this.setState( { getPublisherConsentsResponse: JSON.stringify(result, null, 2) } )
    })
  }

  handleClear = () => {
    this.setState( { getPublisherConsentsResponse: ''} )
  }

  render() {
    return (
      <div>
        <Title title='GetPublisherConsents' />
        <Subtitle>Code</Subtitle>
        <Code code={
`window.__cmp('getPublisherConsents', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`
        } />
        <Subtitle>My Logger Output</Subtitle>
        <WrapperButtons>
          <Button label='Execute' clicked={this.handleGetPublisherConsents} />
          <Button label='Clear' clicked={this.handleClear} />
        </WrapperButtons>
        <Output output={this.state.getPublisherConsentsResponse} />
      </div>
    )
  }
}

export default GetPublisherConsents