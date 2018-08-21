import React, { Component } from "react"
import Title from '../../components/UI/PageMainTitle/PageMainTitle'
import Button from '../../components/UI/Button/Button'
import Code from '../../components/UI/Code/Code'
import Output from '../../components/UI/Output/Output'

import { Subtitle, WrapperButtons } from '../MethodPages-styles'

class Ping extends Component {
  state = {
    pingResponse: ''
  }

  handlePing = () => {
    window.__cmp('ping', null, (result) => {
      this.setState( { pingResponse: JSON.stringify(result, null, 2) } )
    })
  }

  handleClear = () => {
    this.setState( { pingResponse: ''} )
  }

  render() {
    return (
      <div>
        <Title title='Ping' />
        <Subtitle>Code</Subtitle>
        <Code code={
`window.__cmp('ping', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`
        } />
        <Subtitle>My Logger Output</Subtitle>
        <WrapperButtons>
          <Button label='Execute' clicked={this.handlePing} />
          <Button label='Clear' clicked={this.handleClear} />
        </WrapperButtons>
        <Output output={this.state.pingResponse} />
      </div>
    )
  }
}

export default Ping