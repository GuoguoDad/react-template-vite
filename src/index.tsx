import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { store } from '@store'
import Workspace from '@pages/workspace'
import App from './app'
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
