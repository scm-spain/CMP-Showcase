import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'
import Button from '@schibstedspain/sui-atom-button'

const baseClass = 'methodPages'

class GetVendorList extends Component {
  state = {
    getVendorListResponse: ''
  }

  handleGetVendorList = () => {
    window.__cmp('getVendorList', null, result => {
      this.setState({getVendorListResponse: JSON.stringify(result, null, 2)})
    })
  }

  handleClear = () => {
    this.setState({getVendorListResponse: ''})
  }

  render() {
    return (
      <div>
        <Title title="GetVendorList" />
        <h3 className={`${baseClass}-subtitle`}>Code</h3>
        <Code
          code={`window.__cmp('getVendorList', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button onClick={this.handleGetVendorList}>Execute</Button>
          <Button onClick={this.handleClear}>Clear</Button>
        </div>
        <Output output={this.state.getVendorListResponse} />
      </div>
    )
  }
}

export default GetVendorList