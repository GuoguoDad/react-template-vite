import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Tag, Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import groupBy from 'lodash/groupBy'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { MenuInfo } from 'rc-menu/lib/interface'
import { AppDispatch, RootState } from '@store'
import { NoticeIcon } from '@comps'
import { bachSetState } from '../slice'
import { tempData, getColor } from '../util'
import './header.less'

const { Header } = Layout

const WorkSpaceHeader = () => {
  const dispatch: AppDispatch = useDispatch()
  const { collapsed } = useSelector((state: RootState) => state.workspace)

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  function getNoticeData(notices: any) {
    if (notices.length === 0) {
      return {}
    }
    const newNotices = notices.map((notice: any) => {
      const newNotice = { ...notice }
      if (newNotice.datetime) {
        newNotice.datetime = dayjs(notice.datetime).fromNow()
      }
      if (newNotice.id) {
        newNotice.key = newNotice.id
      }
      if (newNotice.extra && newNotice.status) {
        let color = getColor(newNotice.status)
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        )
      }
      return newNotice
    })
    return groupBy(newNotices, 'type')
  }

  const noticeData = getNoticeData(tempData)
  return (
    <Header className="notice-header">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: ()=> {
          dispatch(bachSetState({ collapsed: collapsed ? false : true }))
        },
      })}
      <div className="header-right">
        <NoticeIcon
          className="notice-action notice-icon"
          count={12}
          onItemClick={(item: any, tabProps: any) => {
            console.log(item, tabProps)
          }}
          loading={false}
          clearText="清空"
          viewMoreText="查看更多"
          onPopupVisibleChange={() => {}}
          onClear={() => {}}
        >
          <NoticeIcon.Tab
            tabKey="notification"
            list={noticeData['通知']}
            title="通知"
            emptyText="你已查看所有通知"
            showViewMore
          />
          <NoticeIcon.Tab
            tabKey="message"
            list={noticeData['消息']}
            title="消息"
            emptyText="您已读完所有消息"
            showViewMore
          />
          <NoticeIcon.Tab
            tabKey="event"
            list={noticeData['待办']}
            title="待办"
            emptyText="你已完成所有待办"
            showViewMore
          />
        </NoticeIcon>
        <Dropdown overlay={
          <Menu className="menu" selectedKeys={[]} onClick={(info: MenuInfo) => {
            console.log('======info:', info)
          }}>
            <Menu.Item key="center" icon={<UserOutlined />}>
              个人中心
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
              设置
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              退出登录
            </Menu.Item>
          </Menu>
        }>
          <span className="action account">
            <Avatar
              size="small"
              className={'avatar'}
              src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            />
            {'199******06'}
          </span>
        </Dropdown>
      </div>
    </Header>
  )
}

export default WorkSpaceHeader
