import React, { lazy } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { DesktopOutlined, UserOutlined } from '@ant-design/icons'
import type { ItemType } from 'antd/es/menu/hooks/useItems'

import Error404 from '@pages/error404'
import LoginPage from '@pages/login'
import Workspace from '@pages/workspace'

import lazyLoad from './kits/lazyLoad'
import CheckLogin from './kits/checkLogin'

export declare type MenuRouteObject = {
  icon?: React.ReactNode
  label?: string
  children?: MenuRouteObject[] | null
} & RouteObject

export const createMenuItems = (
  routers: MenuRouteObject[] | undefined,
  key: string,
  topMenuOnly?: boolean
): ItemType[] => {
  return routers
    ? routers.map(item => {
        return {
          key: `${key}/${item.path}`,
          icon: item.icon,
          children: !topMenuOnly && item.children ? createMenuItems(item.children, `${key}/${item.path}`, false) : null,
          label: item.label
        } as ItemType
      })
    : []
}

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

const getBreadcrumbs = (pathname: string): string[] => {
  const breadcrumbs: string[] = []
  let tempRouters: MenuRouteObject[] = routerMaps[0].children!
  let matchedPath = ''
  while (tempRouters) {
    let isMatchedRouters = false
    for (const router of tempRouters) {
      const routerPath = `${matchedPath}/${router.path}`
      if (routerPath === pathname || pathname.includes(routerPath)) {
        breadcrumbs.push(router.label!)
        matchedPath = routerPath
        isMatchedRouters = true
        tempRouters = router.children as MenuRouteObject[]
        break
      }
    }
    if (!isMatchedRouters) {
      break
    }
  }
  return breadcrumbs
}

const router = createBrowserRouter(routerMaps)
export { router, getBreadcrumbs }
