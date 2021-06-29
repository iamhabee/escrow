import { Button, Form, Input } from 'antd'
import React, {useState} from 'react'
import style from './style.module.scss'

const ProfileList = ({data, dispatch, loading}) => {

  const [editToggle, setEditToggle] = useState(true)

  const handleToggle =() =>{
    setEditToggle(!editToggle)
  }

  const onFinish =(payload)=>{
    dispatch({
      type: 'profile/UPDATE_PROFILE',
      payload
    })
  }

  const onFinishFailed =(value)=>{
    console.log(value)
  }

  return (
    <div>
      <h5 className="mt-3">
        Basic Information 
        <i role="button" tabIndex="0" onClick={handleToggle} onKeyPress={handleToggle} className={`fe fe-${editToggle?'edit':'eye'} ml-5`} />
      </h5>
      <Form 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          firstName: data.firstName,
          lastName: data.lastName,
          middleName: data.middleName,
          // address: data.address,
          email: data.email,
          phoneNo: data.phoneNo,
        }}
      >
        <ul className="list-unstyled">
          <li className={style.item}>
            <a className={style.itemLink}>
              <div className={style.itemPic} style={{color:"white"}}>
                <i className="fe fe-at-sign" />
              </div>
              <div className="mr-2 row w-100">
                <div className="text-dark col-lg-6">First Name</div>
                <div className="col-lg-6">
                  {editToggle?
                    <div className="text-dark">{data.firstName}</div>:
                    <Form.Item
                      name="firstName"
                    >
                      <Input size="large" placeholder="First Name" />
                    </Form.Item>
                  }
                </div>
              </div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.itemLink}>
              <div className={style.itemPic} style={{color:"white"}}>
                <i className="fe fe-at-sign" />
              </div>
              <div className="mr-2 row w-100">
                <div className="text-dark col-lg-6">Last Name</div>
                <div className="col-lg-6">
                  {editToggle?
                    <div className="text-dark">{data.lastName}</div>:
                    <Form.Item
                      name="lastName"
                    >
                      <Input size="large" placeholder="Last Name" />
                    </Form.Item>
                  }
                </div>
              </div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.itemLink}>
              <div className={style.itemPic} style={{color:"white"}}>
                <i className="fe fe-at-sign" />
              </div>
              <div className="mr-2 row w-100">
                <div className="text-dark col-lg-6">Middle Name</div>
                <div className="col-lg-6">
                  {editToggle?
                    <div className="text-dark">{data.middleName}</div>:
                    <Form.Item
                      name="middleName"
                    >
                      <Input size="large" placeholder="Middle Name" />
                    </Form.Item>
                  }
                </div>
              </div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.itemLink}>
              <div className={style.itemPic} style={{color:"white"}}>
                <i className="fe fe-mail" />
              </div>
              <div className="mr-2 row w-100">
                <div className="text-dark col-lg-6">Email</div>
                <div className="col-lg-6">
                  {editToggle?
                    <div className="text-dark">{data.email}</div>:
                    <Form.Item
                      name="email"
                    >
                      <Input size="large" placeholder="Email" />
                    </Form.Item>
                  }
                </div>
              </div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.itemLink}>
              <div className={style.itemPic} style={{color:"white"}}>
                <i className="fe fe-phone" />
              </div>
              <div className="mr-2 row w-100">
                <div className="text-dark col-lg-6">Phone No</div>
                <div className="col-lg-6">
                  {editToggle?
                    <div className="text-dark">{data.phoneNo}</div>:
                    <Form.Item
                      name="phoneNo"
                    >
                      <Input size="large" placeholder="Phone No" />
                    </Form.Item>
                  }
                </div>
              </div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.itemLink}>
              <div className={style.itemPic} style={{color:"white"}}>
                <i className="fe fe-map" />
              </div>
              <div className="mr-2 row w-100">
                <div className="text-dark col-lg-6">Address</div>
                <div className="col-lg-6">
                  {editToggle?
                    <div className="text-dark">{data.address}</div>:
                    <Form.Item
                      name="address"
                    >
                      <Input size="large" placeholder="Address" />
                    </Form.Item>
                  }
                </div>
              </div>
            </a>
          </li>
        </ul>
        {!editToggle &&
          <Button
            type="primary"
            size="large"
            className="text-center w-50 mb-5"
            htmlType="submit"
            loading={loading}
          >
            <strong>Update</strong>
          </Button>}
      </Form>
    </div>
  )
}

export default ProfileList
