import React from 'react'
import { Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const UserList = loadable(() => import('@pages/user/user-list'/* webpackChunkName: 'UserList', webpackPrefetch: true */))
const ChartLine = loadable(() => import('@pages/chart/chart-line'/* webpackChunkName: 'ChartLine', webpackPrefetch: true */))

const App = () => {
  return (
    <Routes>
      <Route key={'user-list'} path="/user/list" element={<UserList/>} />
      <Route key={'chart-line'} path="/chart/line" element={<ChartLine/>} />
    </Routes>
  )
}

export default App
