import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Tabs, } from 'antd'
import { connect } from 'react-redux'
import General10v1 from 'components/kit/widgets/General/10v1'
import General14 from 'components/kit/widgets/General/14'
import General15 from 'components/kit/widgets/General/15'
// import ProfileList from './profileList'

const { TabPane } = Tabs

const mapStateToProps = ({dispatch, profile, dashboard}) =>({
  dispatch,
  profile:profile.profile,
  assets: dashboard.assets,
})

const User = ({dispatch, profile, assets}) => {
  const [tabKey, setTabKey] = useState('1')

  console.log(profile)
  // const completeTrade = profile.buyer !== undefined && profile.buyer.filter()
  useEffect(() => {
    dispatch({
      type:"profile/PROFILE"
    })
    dispatch({
      type:"dashboard/ASSETS"
    })
    // eslint-disable-next-line
  }, [])

  const changeTab = key => {
    setTabKey(key)
  }

  return (
    <div>
      <Helmet title="Profile" />
      <div className="row mt-5">
        <div className="col-xl-4 col-lg-12">
          <div className="card">
            <div className="card-body">
              <General10v1 data={profile} assets={assets} dispatch={dispatch} />
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-12">
          <div className="card">
            <div className="card-header card-header-flex flex-column">
              <div className="d-flex flex-wrap border-bottom pt-3 pb-4 mb-3">
                <div className="mr-5">
                  <div className="text-dark font-size-18 font-weight-bold">{profile.seller !== undefined && profile.seller.length}</div>
                  <div className="text-gray-6">Complete Offers</div>
                </div>
                <div className="mr-5 text-center">
                  <div className="text-dark font-size-18 font-weight-bold">{profile.buyer !== undefined && profile.buyer.length}</div>
                  <div className="text-gray-6">Complete Exchanges</div>
                </div>
                <div className="mr-5 text-center">
                  <div className="text-dark font-size-18 font-weight-bold">{profile.ExchangeOffers !== undefined && profile.ExchangeOffers.length}</div>
                  <div className="text-gray-6">Total Assets</div>
                </div>
              </div>
              <Tabs activeKey={tabKey} className="mr-auto kit-tabs-bold" onChange={changeTab}>
                <TabPane tab="Exchange Offers" key="1" />
                <TabPane tab="Messages" key="2" />
              </Tabs>
            </div>
            <div className="card-body">
              {tabKey === '1' && (
                <div>
                  <General15 />
                  <General15 />
                </div>
              )}
              {tabKey === '2' && <General14 />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(User)
