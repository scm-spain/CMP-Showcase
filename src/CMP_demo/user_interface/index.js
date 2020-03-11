import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App'
import './index.scss'
import boroscmp from '@adv-ui/boros-cmp/lib'

boroscmp.init().then(() => {
  console.log('Boros has been initialized!')
})

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
