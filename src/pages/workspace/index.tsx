import React, { PropsWithChildren } from 'react'
import { Layout } from 'antd'
import Header from './components/header'
import LeftMenu from './components/menu'
import styles from './index.module.less'

const { Content } = Layout

const WorkSpace = (props: WorkSpaceProps) => {
  return (
    <Layout className={styles.container}>
      <LeftMenu />
      <Layout>
        <Header />
        <Content className={styles.content}>{props.children}</Content>
      </Layout>
    </Layout>
  )
}

export default WorkSpace

type WorkSpaceProps = PropsWithChildren<{}>
