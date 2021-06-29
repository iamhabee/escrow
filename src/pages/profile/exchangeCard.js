import React, { useState } from 'react'
import { Menu, Dropdown, Spin, Result,  Input, Button, Form, Modal, Select } from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import { imageUrl } from 'services/axios';


const ExchangeCard = ({data, loading, assets, dispatch}) => {

  const [showUpdateModal, setshowUpdateModal] = useState(false)
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinishUpdate = (values) => {
    dispatch({
      type: 'dashboard/UPDATE_OFFER',
      payload:values
    })
    setshowUpdateModal(false);
  };

  const handleUpdateOffer = (value) =>{
    setshowUpdateModal(true)
    form.setFieldsValue({
      assetId:value.assetId,
      amountPerAsset:value.amountPerAsset,
      minAmount:value.minAmount,
      maxAmount:value.maxAmount,
      id:value.offerId
    })
  }

  return (
    <div className="d-flex flex-nowrap align-items-start pt-4">
      <div className="flex-grow-1">
        {loading && <Spin />}
        {!loading && data.length === 0 ?
          <Result
            icon={<SmileOutlined />}
            title="Ooops there are currently no offer, click button below to create a new offer"
          />:
        data.map( (datum) =>(
          <div className="d-flex flex-nowrap align-items-start pt-4" key={datum.offerId}>
            <div className="kit__utils__avatar kit__utils__avatar--size64 mr-4 flex-shrink-0 align-self-start">
              <img src={datum && `${imageUrl}/images/assets/${datum.asset.image}`} alt="Mary Stanform" />
            </div>
            <div className="flex-grow-1">
              <div className="border-bottom">
                <div className="d-flex flex-wrap mb-2">
                  <div className="mr-auto">
                    <div className="text-gray-6">
                      <span className="text-dark font-weight-bold">{datum.name}</span> posted
                    </div>
                    <div className="text-gray-6">{new Date(datum.createdAt).toDateString()}</div>
                  </div>
                  <div className="nav-item dropdown">
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item>
                            <a role="button" tabIndex="0" onClick={()=>handleUpdateOffer(datum)} onKeyPress={()=>handleUpdateOffer(datum)}>
                              <i className="dropdown-icon fe fe-edit mr-1" /> Edit Offer
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a>
                              <i className="dropdown-icon fe fe-trash mr-1" /> Delete Offer
                            </a>
                          </Menu.Item>
                        </Menu>} 
                      placement="bottomRight"
                    >
                      <a className="nav-link dropdown-toggle pt-sm-0">Actions</a>
                    </Dropdown>
                  </div>
                </div>
                <div className="mb-3 text-gray-6">
                  Lorem ipsum dolor sit amit,consectetur eiusmdd tempory
                  <br /> incididunt ut labore et dolore magna elit
                </div>
                <div className="d-flex flex-wrap justify-content-start align-items-start mb-3">
                  <a className="text-blue mr-3">
                    <i className="fe fe-chevrons-up mr-1" /> Max Qty {datum.maxAmount}
                  </a>
                  <a className="text-blue mr-3">
                    <i className="fe fe-chevrons-down mr-1" /> Min Qty {datum.minAmount}
                  </a>
                  <a className="text-blue mr-3">
                    <i className="fe fe-dollar-sign mr-1" />Price/1 {datum.amountPerAsset}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title={<div className="w-100 text-center">Update Offer</div>}
        style={{ top: 20 }}
        visible={showUpdateModal}
        centered
        footer={null} 
        onCancel={() => setshowUpdateModal(false)}
      >
        <Form form={form} name="control-hooks" onFinish={onFinishUpdate}>
          <Form.Item name="assetId" label="Asset Type" rules={[{ required: true }]}>
            <Select
              placeholder="Select asset type"
              allowClear
            >
              {assets.map(asset => <Option key={asset.assetId} value={asset.assetId}>{asset.name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="amountPerAsset" label="Amount Per Coin" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="minAmount" label="Minimun Amount" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="maxAmount" label="Maximum Amount" rules={[{ required: true }]}>
            <Input />
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

export default ExchangeCard
