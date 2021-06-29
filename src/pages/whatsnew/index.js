import React from 'react'
import { Layout } from 'antd'
import scr1 from './image/scroll111.png'
import scr2 from './image/scroll222.png'
import scr3 from './image/scroll333.png'

const WhatsNew = () => {
  const datas = [
    {
      name: 'New sale',
      image: scr1,
      description: '3 bedroom duplex at williams close apapa. ',
    },
    {
      name: 'On sale',
      image: scr2,
      description: '3 bedroom mansion with a event spacious back yard.',
    },
    {
      name: 'Promo sale',
      image: scr3,
      description: '4 bedroom flat with a event spacious back yard.',
    },
  ]
  return (
    <Layout className="w-100 h-100">
      {/* <Layout> */}
      <div className="" style={{ height: '50px' }}>
        <Layout.Header className="" color="light" style={{ height: '50px' }}>
          <span className="fs-3">Whats New?</span>
        </Layout.Header>
      </div>
      {/* </Layout> */}

      <Layout.Content>
        <div className="w-75 container-fluid mx-auto mt-3">
          <div className="row">
            {datas.map(({ name, image, description }) => (
              <div className="col-md-4">
                <div className="card w-100" style={{ minHeight: '400px' }}>
                  <img src={image} className="card-img-top" alt="..." height="200px" />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-dark"> {description}</p>
                  </div>
                  <div className="card-footer">
                    <span className="btn hoverBtnBgNone">read more...</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-100">
          <div className="float-right">
            <img alt="sketch" src="resources/images/whatsnew.png" width="200px" />
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default WhatsNew
