import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'antd'
// import { DownOutlined } from '@ant-design/icons';
// import { connect } from 'react-redux'
// import { Table } from 'antd'

const mapStateToProps = ({ utilities, dispatch }) => ({
  utilities: utilities.utilities,
  dispatch,
})

const Utilities = ({ dispatch, utilities }) => {
  const data = utilities.length > 0 ? utilities[1].data : []
  useEffect(() => {
    dispatch({
      type: 'utilities/UTILITIES',
    })
    console.log({ data })
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  return (
    <div>
      <div className="row justify-content-center py-4">
        <div className="col-md-12">
          <Card style={{ height: '50vh', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            <p>Card Test</p>
            {data}
          </Card>
        </div>
      </div>

      <div className="row justify-content-between py-4">
        <div className="col-md-5">
          <Card size="small" style={{ backgroundColor: '#990000' }}>
            <div className="font-weight-bold" style={{ color: 'white' }}>
              UTILITY PAYMENT
            </div>
          </Card>

          <Card
            size="small"
            bordered={false}
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              fontWeight: 'bold',
              height: '80vh',
            }}
          >
            {/* <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
              <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
              <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
              <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
            </div> */}

            <div className="list-group list-group-flush" id="myList" role="tablist">
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#home"
                role="tab"
              >
                Home
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#profile"
                role="tab"
              >
                Profile
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#messages"
                role="tab"
              >
                Messages
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#settings"
                role="tab"
              >
                Settings
              </a>
            </div>
          </Card>
        </div>

        <div className="col-md-5">
          <Card
            size="small"
            style={{ backgroundColor: '#990000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            <div className="font-weight-bold" style={{ color: 'white' }}>
              SUMMARY
            </div>
          </Card>

          <Card
            size="small"
            style={{
              backgroundColor: '#eaeaea',
              height: '80vh',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div className="row justify-content-between" style={{ color: 'black' }}>
              <div className="col font-weight-bold">
                <p>Current Charges</p>
                <p>Fixed Charges</p>
                <p>Outstanding Charges</p>
                <p>Subtotal</p>
              </div>
              <div className="col" style={{ textAlign: 'right' }}>
                <p>N000.00</p>
                <p>N000.00</p>
                <p>N000.00</p>
                <p>N000.00</p>
              </div>

              {/* <div className="tab-content">
                <div className="tab-pane" id="home" role="tabpanel">1...</div>
                <div className="tab-pane" id="profile" role="tabpanel">.2..</div>
                <div className="tab-pane" id="messages" role="tabpanel">.4..</div>
                <div className="tab-pane" id="settings" role="tabpanel">3...</div>
              </div> */}

              <div className="row">
                <div className="justify-content-around" style={{ textAlign: 'right' }}>
                  <Button shape="round" style={{ backgroundColor: '#990000', color: 'white' }}>
                    Pay Bill
                  </Button>
                  <Button shape="round" style={{ backgroundColor: '#04304D', color: 'white' }}>
                    History
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img src="/resources/images/house-paint.png" alt="estate-plus" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Utilities)
