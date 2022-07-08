import React from 'react'
import { Layout, Menu } from 'antd'
import { DesktopOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState, AppDispatch } from '@store'
import { bachSetState } from '../slice'

const { SubMenu } = Menu
const { Sider } = Layout

const LeftMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch: AppDispatch = useDispatch()
  const { menuKey, subMenuKey, collapsed } = useSelector((state: RootState) => state.workspace)

  const changeUrl = (url: string, name: string) => {
    if (location.pathname !== url) {
      navigate(url)
    }
    dispatch(bachSetState({ memuName: name }))
  }

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
      >
        <SubMenu
          key="user"
          icon={<UserOutlined />}
          title={
            <span>
              <span>系统管理</span>
            </span>
          }
        >
          <Menu.Item key="userlist">
            <a onClick={() => changeUrl('/user/list', '用户管理')}>用户管理</a>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="chart"
          icon={<DesktopOutlined />}
          title={
            <span>
              <span>图表</span>
            </span>
          }
        >
          <Menu.Item key="chartline">
            <a onClick={() => changeUrl('/chart/line', '折线图')}>折线图</a>
          </Menu.Item>
          <Menu.Item key="chartpie">
            <a onClick={() => changeUrl('/chart/pie', '饼图')}>饼图</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default LeftMenu
