import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Table, Button, Pagination, Divider, Layout, Popconfirm, Drawer } from 'antd'

import { queryUserList } from './web-api'
import { UserState } from './type'
import styles from './user.module.less'

import UserAdd from './user-add'





const UserList = () => {
  const [state, setState] = useSetState<UserState>({
    data: [],
    selectedRowKeys: [],
    loading: true,
    total: 0,
    currentPage: 1,
    pageSize: 10,
    showAddForm: false
  })




  useEffect(() => {
    queryList(state.currentPage)
  }, [])

  return (
    <>
      <Layout className={styles.container}>
        <div className={styles.toolbar}>
          <span className={styles.selectedText}>
            {state.selectedRowKeys.length > 0 ? `已选中 ${state.selectedRowKeys.length} 条数据` : ''}
          </span>
          <Button type="primary" onClick={() => setState({ showAddForm: true })}>
            新增
          </Button>
        </div>
        <Table
          size="middle"
          rowKey={record => record.id}
          locale={{ emptyText: '暂无数据' }}
          dataSource={state.data}
          loading={state.loading}
          pagination={false}
          rowSelection={{
            selectedRowKeys: state.selectedRowKeys,
            fixed: true,
            onChange: selectedRowKeys => {
              setState({ selectedRowKeys })
            }
          }}
          columns={[
            {
              className: 'table-column',
              title: '姓名',
              dataIndex: 'name'
            },
            {
              className: 'table-column',
              title: '手机号',
              dataIndex: 'phone'
            },
            {
              className: 'table-column',
              title: '部门',
              dataIndex: 'deptName'
            },
            {
              className: 'table-column',
              title: '操作',
              dataIndex: '',
              width: 200,
              render: record => (
                <span>
                  <a>修改</a>
                  <Divider type="vertical" />
                  <Popconfirm title={'确定删除吗?'} okText="确定" cancelText="取消">
                    <a>删除</a>
                  </Popconfirm>
                </span>
              )
            }
          ]}
        />
        <div>
          <Pagination
            className="common-pagination"
            current={state.currentPage}
            style={{ margin: 16, fontSize: 12 }}
            onChange={(page: number, pageSize?: number) => {
              queryList(page)
            }}
            showTotal={(total: number, range: any) => {
              return total > 0 ? `当前第 ${range[0]} - ${range[1]} 条  共计 ${total} 条` : '没有符合条件的记录'
            }}
            defaultCurrent={1}
            defaultPageSize={10}
            total={state.total}
            showQuickJumper
          />
        </div>
      </Layout>
      <Drawer
        title="新增用户"
        placement="right"
        width={'80%'}
        closable={true}
        destroyOnClose={true}
        onClose={() => setState({ showAddForm: false })}
        visible={state.showAddForm}
        getContainer={false}
        style={{ position: 'absolute' }}
      >
        <UserAdd />
      </Drawer>
    </>
  )

  function queryList(currentPage: number) {
    queryUserList().then(res => {
      setState({ data: res.dataList, total: res.totalCount, loading: false, currentPage })
    })
  }
}

export default UserList
