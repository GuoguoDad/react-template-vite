import React, { PropsWithChildren } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import CheckPermission from '@kits/checkPermission'

import Header from './components/header'
import LeftMenu from './components/menu'
import Breadcrumbs from './components/breadcrumbs'
import styles from './index.module.less'

const { Content } = Layout

const WorkSpace = (props: WorkSpaceProps) => {
  return (
    <Layout className={styles.container}>
      <LeftMenu />
      <Layout>
        <Header />
        <Content className={styles.content}>
          <CheckPermission>
            <Breadcrumbs />
            <Outlet />
          </CheckPermission>
        </Content>
      </Layout>
    </Layout>
  )
}

export default WorkSpace

type WorkSpaceProps = PropsWithChildren<{}>
