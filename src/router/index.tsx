import React from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import type { ItemType } from 'antd/es/menu/hooks/useItems'
import { routerMaps } from './routeMap'

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

const getDefaultOpenKeys = (pathname: string) => {
  const pageRoutes = routerMaps[0].children!
  let subMenuKey = '',
    menuKey = ''
  for (const routeItem of pageRoutes) {
    if (pathname.includes(routeItem.path!)) {
      subMenuKey = `/${routeItem.path!}`

      for (const childMenuItem of routeItem.children || []) {
        const childPath = `/${routeItem.path!}/${childMenuItem.path!}`
        if (pathname === childPath) {
          menuKey = childPath
        }
      }
      if (!menuKey) break
    }
  }
  return { subMenuKey, menuKey }
}

const router = createBrowserRouter(routerMaps)
export { router, getBreadcrumbs, routerMaps, getDefaultOpenKeys }
