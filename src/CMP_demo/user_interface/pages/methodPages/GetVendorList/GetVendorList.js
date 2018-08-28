import React, {Component} from 'react'
import Title from '../../../components/UI/PageMainTitle/PageMainTitle'
import Button from '../../../components/UI/Button/Button'
import Code from '../../../components/UI/Code/Code'
import Output from '../../../components/UI/Output/Output'

const baseClass = 'methodPages'

class GetVendorList extends Component {
  state = {
    getVendorListResponse: ''
  }

  handleGetVendorList = () => {
    window.__cmp('getVendorList', null, (data, success) => {
      this.setState({
        getVendorListResponse: {
          success: JSON.stringify(success, null, 2),
          data: JSON.stringify(data, null, 2)
        }
      })
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
          code={`window.__cmp('getVendorList', null, (data, success) => {
  console.log(JSON.stringify(data, null, 2));
});`}
        />
        <h3 className={`${baseClass}-subtitle`}>My Logger Output</h3>
        <div className={`${baseClass}-buttonWrapper`}>
          <Button label="Execute" clicked={this.handleGetVendorList} />
          <Button label="Clear" clicked={this.handleClear} />
        </div>
        <Output output={this.state.getVendorListResponse} />
      </div>
    )
  }
}

export default GetVendorList
