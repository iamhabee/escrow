import React from 'react'
import {Spin, Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons';


const OngoingCard = ({data, loading, id}) => {
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
            {/* <div className="kit__utils__avatar kit__utils__avatar--size64 mr-4 flex-shrink-0 align-self-start">
              <img src={datum && `${imageUrl}/images/assets/${datum.image}`} alt="Mary Stanform" />
            </div> */}
            <div className="flex-grow-1">
              <div className="border-bottom">
                <div className="d-flex flex-wrap mb-2">
                  <div className="mr-auto">
                    <div className="text-gray-6">
                      {/* <span className="text-dark font-weight-bold">{datum.name}</span> posted */}
                      {datum.buyerId === id?
                        <a href={datum.paymentLink} className="btn btn-danger btn-large" key="buy">
                          {datum.buyerPaid? "Waiting for Seller...": "Proceed to payment"}
                        </a>:
                        <a href={datum.paymentLink} className="btn btn-danger btn-large" key="buy">
                          {datum.sellerPaid? "Waiting for Buyer...": "Proceed to payment"}
                        </a>}
                    </div>
                    <div className="text-gray-6">{new Date(datum.createdAt).toDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OngoingCard
