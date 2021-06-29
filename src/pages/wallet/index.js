import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import WalletCards from 'pages/wallet/walletCards'

const mapStateToProps = ({ wallet }) => ({
  wallet: wallet.wallet,
})

const Wallet = ({ dispatch, wallet }) => {
  const tableColumns = [
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Payment Method',
      dataIndex: 'payment_method',
      key: 'payment_method',
    },
    {
      title: 'Tnx Type',
      dataIndex: 'wallet_type',
      key: 'wallet_type',
      sorter: (a, b) => a.wallet_type - b.wallet_type,
    },
    {
      title: 'Date',
      dataIndex: 'created_at',
      key: 'created_at',
    },
  ]

  const data = wallet.length > 0 ? wallet[1].data : []
  useEffect(() => {
    dispatch({
      type: 'wallet/WALLET',
    })
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  return (
    <div>
      <WalletCards />

      <div className="row">
        <div className="col-lg-12">
          <div className="card border-none">
            <div className="card-header">
              <button
                className="btn btn-md btn-primary"
                type="button"
                onClick={() => console.log('hello')}
              >
                Transaction history
              </button>
            </div>
            <div className="card-body">
              <div className="kit__utils__table">
                <Table columns={tableColumns} dataSource={data} rowKey="id" />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <img src="/resources/images/house-paint.png" alt="estate-plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Wallet)
