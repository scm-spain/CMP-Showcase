import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'
import Button from '@schibstedspain/sui-atom-button'

const baseClass = 'methodPages'

class Ping extends Component {
  state = {
    pingResponse: ''
  }

  handlePing = () => {
    window.__cmp('ping', null, result => {
      this.setState({pingResponse: JSON.stringify(result, null, 2)})
    })
  }

  handleClear = () => {
    this.setState({pingResponse: ''})
  }

  render() {
    return (
      <div>
        <Title title="Ping" />
        <h3 className={`${baseClass}-subtitle`}>Code</h3>
        <Code
          code={`window.__cmp('ping', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button onClick={this.handlePing}>Execute</Button>
          <Button onClick={this.handleClear}>Clear</Button>
        </div>
        <Output output={this.state.pingResponse} />
      </div>
    )
  }
}

export default Ping
