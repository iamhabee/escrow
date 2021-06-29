import React, {useState} from 'react'
import {  Dropdown, Avatar, Modal, Form, Input, Button  } from 'antd'
import {numberFormat, imageUrl} from 'services/axios'
// import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import style from './style.module.scss'

// const { TabPane } = Tabs

const CardList = ({data, dispatch}) => {

  const [showModal, setShowModal] = useState(false)
  const [form] = Form.useForm();

  const onFinishCreate = (values) => {
    dispatch({
      type: 'dashboard/BUY_OFFER',
      payload:values
    })
    setShowModal(false);
  };

  const dropdownMenu = (
    <div className="d-flex flex-wrap align-items-start bg-light px-2 py-2">
      <div className="kit__utils__avatar kit__utils__avatar--size64 mr-3">
        <img src="resources/images/avatars/3.jpg" alt="Mary Stanform" />
      </div>
      <div>
        <div className="text-uppercase font-size-12">{data.User.email}</div>
        <div className="text-dark font-weight-bold font-size-18 mb-2">{data.User.firstName} {data.User.lastName}</div>
        <Link to={`/profile/${data.userId}`}>
          <button type="button" className={`btn btn-success ${style.btnWithAddon}`}>
            <span className={`${style.btnAddon}`}>
              <i className={`${style.btnAddonIcon} fe fe-plus-circle`} />
            </span>
            View Profile
          </button>
        </Link>
      </div>
    </div>
  )
  return (
    <div>
      <div className="height-150 d-flex flex-column" style={{backgroundImage: "linear-gradient(10deg, white , #3a5ca0)"}}>
        <div className="card-header card-header-flex border-bottom-0">
          <div className="d-flex flex-row justify-content-center mt-3">
            <Avatar shape="square" size={32} src={data && `${imageUrl}/images/assets/${data.asset.image}`} />
            <h5 className="mb-0 ml-2 text-white">{data.asset.name}</h5>
          </div>
          <div className="ml-auto d-flex flex-column justify-content-center">
            <div className="dropdown d-inline-block">
              <Dropdown overlay={dropdownMenu} placement="bottomRight">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle dropdown-toggle-noarrow"
                >
                  <i className="fe fe-more-horizontal" />
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <div className="text-primary font-size-30 font-weight-bold">{numberFormat(data.amountPerAsset)}</div>
          {/* <p className="text-gray-6">Min Amount to purchase {numberFormat(data.minAmount)}</p>
          <p className="text-gray-6">Max Amount to purchase {numberFormat(data.maxAmount)}</p> */}
          <button type="button" className={`btn btn-success ${style.btnWithAddon}`} onClick={()=>setShowModal(true)}>
            <span className={`${style.btnAddon}`}>
              <i className={`${style.btnAddonIcon} fe fe-plus-circle`} />
            </span>
            Buy Now
          </button>
        </div>
      </div>
      <Modal
        title={<div className="w-100 text-center">Buy Offer</div>}
        style={{ top: 20 }}
        visible={showModal}
        centered
        footer={null} 
        onCancel={() => setShowModal(false)}
      >
        <Form form={form} name="control-hooks" onFinish={onFinishCreate}>
          <Form.Item name="offerId" hidden initialValue={data.offerId}>
            <Input />
          </Form.Item>
          <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="buyerAddress" label="Your Address" rules={[{ required: true }]}>
            <Input.TextArea showCount maxLength={100}>Your address goes in here</Input.TextArea>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default CardList
