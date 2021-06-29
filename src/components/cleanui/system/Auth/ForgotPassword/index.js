import React from 'react'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import style from '../style.module.scss'

const mapStateToProps = ({ dispatch, user}) => ({
  dispatch,
  loading:user.loading
})

const ForgotPassword = ({dispatch, loading}) => {

  const onFinish = values => {
    console.log('Success:', values)
    dispatch({
      type: 'user/FORGOT_PASSWORD',
      payload: values,
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
      <div className={`${style.container}`}>
        <div className={`text-white font-size-18 mb-3 mt-6 ${style.welcomeText}`}>
          <strong>Reset Password</strong>
        </div>
        <hr style={{width:"100%", borderWidth:1, borderStyle:"solid"}} />
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input size="large" placeholder="Email Address" />
          </Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" size="large" className="text-center w-100">
            <strong>Reset my password</strong>
          </Button>
        </Form>
        <Link to="/auth/login" className="kit__utils__link font-size-16 text-white">
          <i className="fe fe-arrow-left mr-1 align-middle" />
          Go to Sign in
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(ForgotPassword)
