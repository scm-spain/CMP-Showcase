import React, { Component } from "react"
import Title from '../../components/UI/PageTitle/PageTitle'
import Button from '../../components/UI/Button/Button'
import Code from '../../components/UI/Code/Code'
import Output from '../../components/UI/Output/Output'

import styled from 'styled-components'

const Subtitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
`

const WrapperButtons = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  a:first-child {
    margin-right: 1.5rem;
  }
`

class GetVendorList extends Component {
  state = {
    getVendorListResponse: ''
  }

  handleGetVendorList = () => {
    window.__cmp('getVendorList', null, (result) => {
      this.setState( { getVendorListResponse: JSON.stringify(result, null, 2) } )
    })
  } 

  handleClear = () => {
    this.setState( { getVendorListResponse: ''} )
  }

  render() {
    return (
      <div>
        <Title title='GetVendorList' />
        <Subtitle>Code</Subtitle>
        <Code code={
`window.__cmp('getVendorList', null, function(result) {
  console.log(JSON.stringify(result, null, 2));
});`
        } />
        <Subtitle>My Logger Output</Subtitle>
        <WrapperButtons>
          <Button label='Execute' clicked={this.handleGetVendorList} />
          <Button label='Clear' clicked={this.handleClear} />
        </WrapperButtons>
        <Output output={this.state.getVendorListResponse} />
      </div>
    )
  }
}

export default GetVendorList
