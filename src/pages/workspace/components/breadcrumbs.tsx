import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { getBreadcrumbs } from '@router'

/**
 * 面包屑组件
 * @constructor
 */
const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation()

  const breadcrumbs = useMemo(() => getBreadcrumbs(pathname), [pathname])

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbs.map(value => {
        return <Breadcrumb.Item>{value}</Breadcrumb.Item>
      })}
    </Breadcrumb>
  )
}

export default Breadcrumbs
