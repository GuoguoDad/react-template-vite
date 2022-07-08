import React from 'react'
import { Form, Input, Select, Button } from 'antd'
import { formItemLayout, tailFormItemLayout } from './util'
import styles from './user.module.less'
const { Option } = Select

const UserAdd = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="add"
      className={styles.addForm}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="姓名"
        rules={ [
          { required: true, message: '请输入用户名', whitespace: true },
          { min: 4, max: 20, message: '用户名4~20位' },
          { pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/, message: '用户名只能由中文、英文或者数字以及下划线组成' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="手机号码"
        rules={[{ required: true, message: '请输入手机号码' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="deptName"
        label="部门"
        rules={[{ required: true, message: '请选择部门' }]}
      >
        <Select placeholder="选择部门">
          <Option value="1">前端开发部</Option>
          <Option value="2">中台开发部</Option>
          <Option value="3">后台开发部</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserAdd