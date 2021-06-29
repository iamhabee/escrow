import React, {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Input, Result, Button, Spin, Form, Modal, Select } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import CardList from './cardList'

const mapStateToProps = ({ dispatch, dashboard}) => ({
  dispatch,
  dashboard: dashboard.dashboard,
  loading: dashboard.loading,
  offerBought: dashboard.offerBought,
  assets: dashboard.assets,
  exchangeSuccess: dashboard.exchangeSuccess,
})

const Dashboard = ({dispatch, dashboard, loading, assets, offerBought, exchangeSuccess}) => {

  const [showModal, setShowModal] = useState(false)
  const { Search } = Input;
  const [form] = Form.useForm();
  const { Option } = Select;

  useEffect(() => {
    fetchOffers()
    dispatch({
      type:"dashboard/ASSETS"
    })
    // eslint-disable-next-line
  }, [])

  const onSearch = value => console.log(value);
 
  const fetchOffers = ()=>{
    dispatch({
      type:"dashboard/DASHBOARD",
      payload:{limit:10, offset:0}
    })
  }

  const onFinishCreate = (values) => {
    dispatch({
      type: 'dashboard/CREATE_OFFER',
      payload:{values, from:"dashboard"}
    })
    setShowModal(false);
  };

  const handleClose = () =>{
    dispatch({
      type: 'dashboard/SET_STATE',
      payload: {
        offeerBought: false,
        exchangeSuccess:{}
      },
    })
  }

  return (
    <div>
      <Helmet title="Dashboard: Escrow" />
      <div className="card mt-5">
        <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton />
      </div>
      <div className="row">
        {loading && <Spin />}
        {!loading && dashboard.length === 0 ? 
          <Result
            icon={<SmileOutlined />}
            title="Ooops there are currently no offer, click button below to create a new offer"
            extra={<Button type="primary" onClick={()=>setShowModal(true)}>Create Offer</Button>}
          />:
        dashboard.map((datum)=>(
          <div className="col-md-4 mt-3" key={datum.offerId}>
            <CardList data={datum} dispatch={dispatch} />
          </div>))
        }
      </div>
      <Modal
        style={{ top: 20 }}
        visible={offerBought}
        centered
        footer={null}
      >
        <Result
          status="success"
          title="Successfully make a bid to buy coin"
          subTitle="Proceed to payment to complete the transaction"
          extra={[
            <Button type="primary" key="console" onClick={handleClose}>
              COntinue
            </Button>,
            <a href={exchangeSuccess.paymentLink} className="btn btn-primary btn-large" key="buy">Proceed to payment</a>,
          ]}
        />
      </Modal>
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

export default connect(mapStateToProps)(Dashboard)
