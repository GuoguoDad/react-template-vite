import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@store'
import { router } from '@router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import './assets/style/index.less'

const container = document.getElementById('root')
const root = createRoot(container!)

function App() {
  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

root.render(App())
