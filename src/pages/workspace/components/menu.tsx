import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { AppDispatch, RootState } from '@store'
import { createMenuItems, routerMaps } from '@router'

const { Sider } = Layout

const LeftMenu = () => {
  const navigate = useNavigate()
  const { menuKey, subMenuKey, collapsed } = useSelector((state: RootState) => state.workspace)

  const childMenuItems = createMenuItems(routerMaps[0].children, '', false)

  return (
    <Sider className="layout-sider" trigger={null} collapsible width={256} collapsed={collapsed}>
      <div className="common-logo">
        <h1></h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[menuKey]}
        defaultOpenKeys={[subMenuKey]}
        style={{ height: 'calc(100% - 64)', borderRight: 0, padding: '16px 0' }}
        items={childMenuItems || []}
        onClick={item => navigate(item.key)}
      />
    </Sider>
  )
}

export default LeftMenu
