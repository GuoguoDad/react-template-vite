import CheckLogin from '@kits/checkLogin'
import Workspace from '@pages/workspace'
import Error404 from '@pages/error404'
import { DesktopOutlined, UserOutlined } from '@ant-design/icons'
import lazyLoad from '@kits/lazyLoad'
import React, { lazy } from 'react'
import LoginPage from '@pages/login'
import { MenuRouteObject } from './index'

export const routerMaps: MenuRouteObject[] = [
  {
    path: '/',
    element: (
      <CheckLogin>
        <Workspace />
      </CheckLogin>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: 'system',
        label: '系统管理',
        icon: <UserOutlined />,
        children: [
          {
            path: 'userList',
            label: '用户管理',
            element: lazyLoad(lazy(() => import('@pages/user/user-list')))
          }
        ] as MenuRouteObject[]
      },
      {
        path: 'chart',
        label: '图表管理',
        icon: <DesktopOutlined />,
        children: [
          {
            path: 'line',
            label: '折线图',
            element: lazyLoad(lazy(() => import('@pages/chart/chart-line')))
          },
          {
            path: 'pie',
            label: '折线图',
            element: lazyLoad(lazy(() => import('@pages/chart/chart-line')))
          }
        ] as MenuRouteObject[]
      }
    ] as MenuRouteObject[]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]
