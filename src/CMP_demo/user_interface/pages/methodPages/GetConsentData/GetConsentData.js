import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'
import Button from '@schibstedspain/sui-atom-button'

const baseClass = 'methodPages'

class GetConsentData extends Component {
  state = {
    getConsentDataResponse: ''
  }

  handleGetConsentData = () => {
    window.__cmp('getConsentData', null, (data, success) => {
      this.setState({
        getConsentDataResponse: {
          success: JSON.stringify(success, null, 2),
          data: JSON.stringify(data, null, 2)
        }
      })
    })
  }

  handleClear = () => {
    this.setState({getConsentDataResponse: ''})
  }

  render() {
    return (
      <div>
        <Title title="Get Consent Data" />
        <h3 className={`${baseClass}-subtitle`}>Code</h3>
        <Code
          code={`window.__cmp('getConsentData', null, (data, success) => {
  console.log(JSON.stringify(success, null, 2));
  console.log(JSON.stringify(data, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button onClick={this.handleGetConsentData}>Execute</Button>
          <Button onClick={this.handleClear}>Clear</Button>
        </div>
        <Output output={this.state.getConsentDataResponse} />
      </div>
    )
  }
}

export default GetConsentData
