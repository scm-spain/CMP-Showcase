import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'
import Button from '@schibstedspain/sui-atom-button'

const baseClass = 'methodPages'

class GetVendorConsents extends Component {
  state = {
    getVendorConsentsResponse: ''
  }

  handleGetVendorConsents = () => {
    window.__cmp('getVendorConsents', null, (data, success) => {
      this.setState({
        getVendorConsentsResponse: {
          success: JSON.stringify(success, null, 2),
          data: JSON.stringify(data, null, 2)
        }
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
          code={`window.__cmp('getVendorConsents', null, (data, success) => {
  console.log(JSON.stringify(success, null, 2));
  console.log(JSON.stringify(data, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button onClick={this.handleGetVendorConsents}>Execute</Button>
          <Button onClick={this.handleClear}>Clear</Button>
        </div>
        <Output output={this.state.getVendorConsentsResponse} />
      </div>
    )
  }
}

export default GetVendorConsents
