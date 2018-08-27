import React, {Component} from 'react'
import marked from 'marked'
import {configurationText} from './configurationText.js'

class configuration extends Component {
  componentDidMount() {
    const rawMarkup = marked(configurationText, {sanitize: true})
    document.getElementById('configuration').innerHTML = rawMarkup
  }

  render() {
    return <div id="configuration" />
  }
}

export default configuration
