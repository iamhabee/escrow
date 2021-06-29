import React from 'react'
// import  img1 from '../../../public/resources/images/'

const WalletCards = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          {/* <h5 className="text-dark">Welcome {userData.name}</h5> */}
          <div className="mb-4">
            <div
              className="card border-2 bg-transparent text-white"
              style={{
                borderColor: '#990000',
                borderRadius: '33px',
                height: '30vh',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center gx-4">
                  <div className="col-span-4" style={{ paddingTop: '5%' }}>
                    <img src="/resources/images/wallet1.png" alt="estate-plus" />
                  </div>
                  <div className="col">
                    <div>
                      <div className="font-size-21 font-weight-bold">
                        <p style={{ color: '#990000' }}>Wallet Balance</p>
                      </div>
                      <div className="font-size-40 font-weight-bold">
                        <p style={{ color: 'black' }}>N000.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          {/* <h5 className="text-dark">Welcome {userData.name}</h5> */}
          <div className="mb-4">
            <div
              className="card border-2 bg-transparent text-white"
              style={{
                borderColor: '#990000',
                borderRadius: '33px',
                height: '30vh',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center gx-4">
                  <div className="col-span-4" style={{ paddingTop: '5%' }}>
                    <button
                      type="button"
                      style={{ color: '#ffc', backgroundColor: '#990100', border: 'none' }}
                    >
                      +
                    </button>
                    {/* <img src="/resources/images/wallet1.png" alt="estate-plus" /> */}
                  </div>
                  <div className="col">
                    <div>
                      <div className="font-size-21 font-weight-bold">
                        <p style={{ color: '#990000' }}>Add to Wallet</p>
                      </div>
                      <div className="font-size-40 font-weight-bold">
                        <p style={{ color: 'black' }}>N000.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletCards
