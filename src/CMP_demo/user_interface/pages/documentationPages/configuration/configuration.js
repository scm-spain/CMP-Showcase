import React, {Component} from 'react'
import ServiceMarkdown from '@s-ui/react-services-markdown'

class configuration extends Component {
  render() {
    return (
      <article className="markdown-body">
        <ServiceMarkdown src="src/CMP_demo/user_interface/pages/documentationPages/configuration/configuration.md" />
      </article>
    )
  }
}

export default configuration
