import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from '@store'
import { router } from './router'

import './assets/style/index.less'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
