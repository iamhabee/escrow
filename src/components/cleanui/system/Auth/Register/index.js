import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, dispatch }) => ({ user, dispatch })

const Register = ({ dispatch, user }) => {
  const onFinish = values => {
    dispatch({
      type: 'user/REGISTER',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-4">
          <strong>Create your account</strong>
        </div>
        {/* <div className="mb-4">
          <p className="text-gray-6">
            And start spending more time on your projects and less time managing your
            infrastructure.
          </p>
        </div> */}
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
          initialValues={{ middleName: ''}}
        >
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name' }]}
          >
            <Input size="large" placeholder="Frist Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name' }]}
          >
            <Input size="large" placeholder="Last Name" />
          </Form.Item>
          <Form.Item hidden name="middleName">
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input size="large" placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input type="password" size="large" placeholder="Password" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="text-center w-100"
            loading={user.loading}
          >
            <strong>Sign up</strong>
          </Button>
        </Form>
        <div className="text-center text-gray-6 pt-2 mb-auto">
          <span className="mr-2">Already have an account?</span>
          <Link to="/auth/login" className="kit__utils__link font-size-16">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Register)
