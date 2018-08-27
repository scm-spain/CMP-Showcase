import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Button from '../../../components/UI/Button/Button'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'

const baseClass = 'methodPages'

class GetConsentData extends Component {
  state = {
    getConsentDataResponse: ''
  }

  handleGetConsentData = () => {
    window.__cmp('getConsentData', null, result => {
      this.setState({getConsentDataResponse: JSON.stringify(result, null, 2)})
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
          code={`window.__cmp('getConsentData', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button label="Execute" clicked={this.handleGetConsentData} />
          <Button label="Clear" clicked={this.handleClear} />
        </div>
        <Output output={this.state.getConsentDataResponse} />
      </div>
    )
  }
}

export default GetConsentData
