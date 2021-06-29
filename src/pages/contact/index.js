import React from 'react'
import { Layout } from 'antd'

const Contact = () => {
  return (
    <Layout className="w-100">
      {/* <Layout> */}
      <div className="" style={{ height: '50px' }}>
        <Layout.Header className="" color="light" style={{ height: '50px' }}>
          <span className="fs-3">Contact page</span>
        </Layout.Header>
      </div>
      {/* </Layout> */}

      <Layout.Content>
        <div className="w-75 mx-auto mt-3">
          <div className="card shadow-sm border" style={{ width: '100%', height: '300px' }}>
            <i />
          </div>
          <span className="text-dark">
            Forgot your PIN? Having issue with utility payment? matter what you might need, we’re
            always on hand to happily provide answers and assistance.
          </span>
          <div className="mt-5 text-dark">
            <p>
              <button
                type="button"
                style={{ color: '#ffc', backgroundColor: '#990100', border: 'none' }}
              >
                +
              </button>{' '}
              Estate Plus Customer Contact Center
            </p>
            <p>
              <button
                type="button"
                style={{ color: '#ffc', backgroundColor: '#990100', border: 'none' }}
              >
                +
              </button>{' '}
              Contact Office
            </p>
            <p>
              <button
                type="button"
                style={{ color: '#ffc', backgroundColor: '#990100', border: 'none' }}
              >
                +
              </button>{' '}
              Suggestion/Enquiry
            </p>
          </div>
        </div>

        <div className="w-100">
          <div className="float-right">
            <img alt="sketch" src="resources/images/contact.png" width="200px" />
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default Contact
