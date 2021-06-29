import React, { useState } from 'react'
import { Card, Modal, Input } from 'antd'
import { connect } from 'react-redux'

const mapStateToProps = ({ settings }) => ({
  modal: settings.modal,
})

const Settings = ({ modal }) => {
  const [visible, setVisible] = useState(modal)
  const [visibleHist, setVisibleHist] = useState(false)
  const [visibleHist2, setVisibleHist2] = useState(false)

  const showModal = () => {
    setVisible(true)
  }
  const showModalHist = () => {
    setVisibleHist(true)
  }
  const showModalHist2 = () => {
    setVisibleHist2(true)
  }
  const handleOk = () => {
    setVisible(false)
    setVisibleHist(false)
    setVisibleHist2(false)
  }
  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
    setVisibleHist(false)
    setVisibleHist2(false)
  }

  return (
    <div>
      <div className="row justify-content-center py-4">
        <div className="col-md-12">
          <Card style={{ height: '50vh', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            <p>Card Test</p>
          </Card>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-12" style={{ color: 'black' }}>
          <div>
            <p>
              <button
                type="button"
                onClick={showModal}
                style={{ color: '#ffc', backgroundColor: '#990100', border: 'none' }}
              >
                +
              </button>{' '}
              Change Password
            </p>
            <p>
              <Modal
                closable
                maskClosable
                okText="Submit"
                okType="text"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="row py-4 gy-2">
                  <Input.Password placeholder="Enter Old Password" />
                  <Input.Password placeholder="Enter New Password" />
                  <Input.Password placeholder="Confirm New Password" />
                </div>
              </Modal>
            </p>
          </div>

          <div>
            <p>
              <button
                type="button"
                onClick={showModalHist}
                style={{ color: '#ffc', backgroundColor: '#990100', border: 'none' }}
              >
                +
              </button>{' '}
              Update Email
            </p>
            <p>
              <Modal
                closable
                maskClosable
                visible={visibleHist}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="py-4 gy-4">
                  <p />
                  <Input placeholder="Enter new email" />
                  <p />
                  <Input placeholder="Confirm new email" />
                </div>
              </Modal>
            </p>
          </div>

          <div>
            <p>
              <button
                type="button"
                onClick={showModalHist2}
                style={{ color: '#ffc', backgroundColor: '#990100', border: 'none' }}
              >
                +
              </button>{' '}
              Update/Add Number
            </p>
            <p>
              <Modal
                closable
                maskClosable
                visible={visibleHist2}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="row py-4 gy-2">
                  <p />
                  <Input inputMode="numeric" placeholder="Enter Number" />
                </div>
              </Modal>
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img src="/resources/images/billing.png" alt="estate-plus" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Settings)
