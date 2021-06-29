/* eslint-disable camelcase */
import React from 'react'
import { Form, Input, Button, Select, Card } from 'antd'
import { connect } from 'react-redux'

const mapStateToProps = ({ dispatch, billing }) => ({
  dispatch,
  billing,
  loading: billing.loading,
})

const { Option } = Select

const PayBill = ({ dispatch, billing, loading }) => {
  const formRef = React.createRef()

  const onFinish = values => {
    console.log(values)
    dispatch({
      type: 'billing/PAY_BILL',
      payload: values,
    })
  }
  console.log(billing)

  return (
    <div>
      <Card>
        <Form ref={formRef} name="control-ref" onFinish={onFinish}>
          <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="payment_method" label="Payment method" rules={[{ required: true }]}>
            <Select placeholder="Select a option for payment" allowClear>
              <Option value="wallet">wallet</Option>
              <Option value="bank">bank</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Pay Bill
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default connect(mapStateToProps)(PayBill)
