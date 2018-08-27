import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Button from '../../../components/UI/Button/Button'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'

const baseClass = 'methodPages'

class GetVendorConsents extends Component {
  state = {
    getVendorConsentsResponse: ''
  }

  handleGetVendorConsents = () => {
    window.__cmp('getVendorConsents', null, result => {
      this.setState({
        getVendorConsentsResponse: JSON.stringify(result, null, 2)
      })
    })
  }

  handleClear = () => {
    this.setState({getVendorConsentsResponse: ''})
  }

  render() {
    return (
      <div>
        <Title title="Get Vendor Consents" />
        <h3 className={`${baseClass}-subtitle`}>Code</h3>
        <Code
          code={`window.__cmp('getVendorConsents', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button label="Execute" clicked={this.handleGetVendorConsents} />
          <Button label="Clear" clicked={this.handleClear} />
        </div>
        <Output output={this.state.getVendorConsentsResponse} />
      </div>
    )
  }
}

export default GetVendorConsents
