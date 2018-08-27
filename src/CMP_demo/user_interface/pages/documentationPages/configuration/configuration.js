// import React, {Component} from 'react'
// import marked from 'marked'
// import {configurationText} from './configurationText.js'

// class configuration extends Component {
//   componentDidMount() {
//     const rawMarkup = marked(configurationText, {sanitize: true})
//     document.getElementById('configuration').innerHTML = rawMarkup
//   }

//   render() {
//     return <div id="configuration" />
//   }
// }

// export default configuration

import React, {Component} from 'react'
import ServiceMarkdown from '@s-ui/react-services-markdown'

class configuration extends Component {
  render() {
    return (
      <ServiceMarkdown src="src/CMP_demo/user_interface/pages/documentationPages/configuration/configuration.md" />
    )
  }
}

export default configuration
