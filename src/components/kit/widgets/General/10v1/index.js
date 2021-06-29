import React, {useState} from 'react'
import { Input, Button, Form, Modal, Select } from 'antd';
import style from './style.module.scss'

const General10v1 = ({data, assets, dispatch}) => {

  const [form] = Form.useForm();
  const { Option } = Select;
  const [showModal, setShowModal] = useState(false)

  const onFinishCreate = (values) => {
    dispatch({
      type: 'dashboard/CREATE_OFFER',
      payload:{values, from:"profile"}
    })
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-wrap flex-column align-items-center">
      <div className="kit__utils__avatar kit__utils__avatar--size64 mb-3">
        <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
      </div>
      <div className="text-center">
        <div className="text-dark font-weight-bold font-size-18">{data.firstName} {data.lastName}</div>
        <div className="text-uppercase font-size-12 mb-3 text-gray-6">{data.email}</div>
        <button type="button" className={`btn btn-primary ${style.btnWithAddon}`} onClick={()=>setShowModal(true)}>
          <span className={`${style.btnAddon}`}>
            <i className={`${style.btnAddonIcon} fe fe-plus-circle`} />
          </span>
          Create Offer
        </button>
      </div>
      <Modal
        title={<div className="w-100 text-center">Create New Offer</div>}
        style={{ top: 20 }}
        visible={showModal}
        centered
        footer={null} 
        onCancel={() => setShowModal(false)}
      >
        <Form form={form} name="control-hooks" onFinish={onFinishCreate}>
          <Form.Item name="assetId" label="Asset Type" rules={[{ required: true }]}>
            <Select
              placeholder="Select asset type"
              allowClear
            >
              {assets.map(asset => <Option key={asset.assetId} value={asset.assetId}>{asset.name}</Option>)}
            </Select>
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

export default General10v1
