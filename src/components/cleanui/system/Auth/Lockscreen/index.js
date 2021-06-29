import React from 'react'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import style from '../style.module.scss'

const mapStateToProps = ({ user, dispatch }) => ({
  dispatch,
  user,
})

const Lockscreen = ({user, dispatch}) => {

  const onFinish = payload => {
    dispatch({
      type: 'user/RESET_PASSWORD',
      payload
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={style.loginLayout}>
      <div className={`p-3 bg-white ${style.loginLogo}`}>
        <img src="/resources/images/login-logo.png" alt="estate-plus" className={style.imgSize} />
      </div>
      <div className={`${style.container}`} style={{ marginTop:70}}>
        <hr style={{width:"100%", borderWidth:1, borderStyle:"solid", marginBottom:20}} />
        <div className="text-white text-center font-size-14 mb-4">
          <strong>Enter the email address associated with your account, and we’ll email you a link to make a new password.</strong>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="email"
            initialValue={user.email}
            hidden
          >
            <Input size="middle" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input size="middle" placeholder="New Password" />
          </Form.Item>
          <Form.Item
            name="password_confirmation"
            rules={[{ required: true, message: 'Please input confirm password' }]}
          >
            <Input size="middle" placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item
            name="token"
            rules={[{ required: true, message: 'Please input token' }]}
          >
            <Input size="middle" placeholder="Token" />
          </Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="text-center w-100">
            <strong>Reset Password</strong>
          </Button>
        </Form>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Already have an account?</span>
        <Link to="/auth/login" className="kit__utils__link font-size-16 text-success">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Lockscreen)
