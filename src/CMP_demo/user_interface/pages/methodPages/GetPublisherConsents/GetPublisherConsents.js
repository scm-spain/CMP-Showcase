import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Button from '../../../components/UI/Button/Button'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'

const baseClass = 'methodPages'

class GetPublisherConsents extends Component {
  state = {
    getPublisherConsentsResponse: ''
  }

  handleGetPublisherConsents = () => {
    window.__cmp('getPublisherConsents', null, (data, success) => {
      this.setState({
        getPublisherConsentsResponse: JSON.stringify(data, null, 2)
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
          code={`window.__cmp('getPublisherConsents', null, (data, success) => {
  console.log(JSON.stringify(data, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button label="Execute" clicked={this.handleGetPublisherConsents} />
          <Button label="Clear" clicked={this.handleClear} />
        </div>
        <Output output={this.state.getPublisherConsentsResponse} />
      </div>
    )
  }
}

export default GetPublisherConsents
