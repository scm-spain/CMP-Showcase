import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'
import Button from '@schibstedspain/sui-atom-button'

const baseClass = 'methodPages'

class GetPublisherConsents extends Component {
  state = {
    getPublisherConsentsResponse: ''
  }

  handleGetPublisherConsents = () => {
    window.__cmp('getPublisherConsents', null, result => {
      this.setState({
        getPublisherConsentsResponse: JSON.stringify(result, null, 2)
      })
    })
  }

  handleClear = () => {
    this.setState({getPublisherConsentsResponse: ''})
  }

  render() {
    return (
      <div>
        <Title title="GetPublisherConsents" />
        <h3 className={`${baseClass}-subtitle`}>Code</h3>
        <Code
          code={`window.__cmp('getPublisherConsents', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button onClick={this.handleGetPublisherConsents}>Execute</Button>
          <Button onClick={this.handleClear}>Clear</Button>
        </div>
        <Output output={this.state.getPublisherConsentsResponse} />
      </div>
    )
  }
}

export default GetPublisherConsents
