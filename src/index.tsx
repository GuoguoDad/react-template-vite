import 'babel-polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@store'
import App from './app'
import Workspace from '@pages/workspace'

import './assets/style/index.less'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <HashRouter>
      <Workspace>
        <App />
      </Workspace>
    </HashRouter>
  </Provider>
)
