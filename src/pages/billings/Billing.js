/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { Card, Modal, Table, DatePicker, Layout, Empty } from 'antd'
import { connect } from 'react-redux'
import PayBill from './PayBill'
// import style from './style.module.scss'

const mapStateToProps = ({ dispatch, billing }) => ({
  dispatch,
  billing,
  modal: billing.modal,
  loading: billing.loading,
})

const BillingPage = ({ dispatch, loading, billing, modal }) => {
  const [visible, setVisible] = useState(modal)
  const [visibleHist, setVisibleHist] = useState(false)
  const bill = billing && billing.billing

  const mon = ['-01', '-02', '-03', '-04', '-05', '-06', '-07', '-08', '-09', '-10', '-11', '-12']
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const thisMonth = JSON.stringify(year + mon[month])

  useEffect(() => {
    dispatch({
      type: 'billing/BILLING',
      payload: thisMonth,
    })
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  const onChange = (date, dateString) => {
    dispatch({
      type: 'billing/BILLING',
      payload: JSON.stringify(dateString),
    })
  }

  const showModal = () => {
    setVisible(true)
  }
  const showModalHist = () => {
    setVisibleHist(true)
  }
  const handleOk = () => {
    setVisible(false)
    setVisibleHist(false)
  }
  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
    setVisibleHist(false)
  }

  const naira = put => {
    return <span>&#8358;{put}</span>
  }

  return (
    <Layout>
      <div className="" style={{ height: '50px' }}>
        <Layout.Header className="" color="light" style={{ height: '50px' }}>
          <span className="fs-3">Billing page</span>
        </Layout.Header>
      </div>

      <div>
        <div className="mt-5 w-100">
          <div className="w-100">
            <Card>
              <DatePicker onChange={onChange} size="large" picker="month" showToday />
            </Card>
            <Card loading={loading} bordered={false} className="row w-100">
              {bill <= 0 ? (
                <Empty />
              ) : (
                bill.map(({ current_charge, current_month, current_year, status }) => (
                  <Card loading={loading} bordered={false} className="col-md-4 w-100 p-0">
                    <div className="card">
                      <div className="card-header" style={{ backgroundColor: '#990000' }}>
                        <p className="fs-4 text-white">BILLING</p>
                      </div>
                      <div className="card-body w-100">
                        <div className="row">
                          <p className="col-6 float-left">Current Charge</p>
                          <p className="col-6 float-right">{naira(current_charge)}</p>
                        </div>
                        <div className="row">
                          <p className="col-6 float-left">Current Month</p>
                          <p className="col-6 float-right">{current_month}</p>
                        </div>
                        <div className="row">
                          <p className="col-6 float-left">Current Year</p>
                          <p className="col-6 float-right">{current_year}</p>
                        </div>
                        <div className="row">
                          <p className="col-6 float-left">Status</p>
                          <p className="col-6 float-right">{status}</p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="float-right">
                          <button
                            onClick={showModal}
                            onKeyDown={showModal}
                            type="button"
                            className="btn hoverBtnRed px-4 mx-2 rounded-pill"
                          >
                            Pay Bill
                          </button>
                          <button
                            onClick={showModalHist}
                            onKeyDown={showModalHist}
                            type="button"
                            className="btn hoverBtnBlue px-4 mx-2 rounded-pill"
                          >
                            History
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </Card>
          </div>
        </div>

        <div className="float-right">
          <img alt="sketch" src="resources/images/billing.png" width="200px" />
        </div>
      </div>

      <Modal
        title="Pay Bill Method"
        style={{ top: 20 }}
        closable
        maskClosable
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PayBill />
      </Modal>

      <Modal
        title="Billing Transaction History"
        className="mx-auto"
        width="80%"
        style={{ top: 20 }}
        closable
        maskClosable
        visible={visibleHist}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Table />
        </div>
      </Modal>
    </Layout>
  )
}

export default connect(mapStateToProps)(BillingPage)
