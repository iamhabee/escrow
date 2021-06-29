import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Tabs, } from 'antd'
import { connect } from 'react-redux'
// import General1 from 'components/kit/widgets/General/1'
import General10v1 from 'components/kit/widgets/General/10v1'
import General12v1 from 'components/kit/widgets/General/12v1'
// import General14 from 'components/kit/widgets/General/14'
import List17 from 'components/kit/widgets/Lists/17'
import ExchangeCard from './exchangeCard'
import ProfileList from './profileList'
import OngoingCard from './ongoingCard'

const { TabPane } = Tabs

const mapStateToProps = ({dispatch, profile, dashboard}) =>({
  dispatch,
  profile:profile.profile,
  assets: dashboard.assets,
})

const Profile = ({dispatch, profile, loading, assets}) => {
  const [tabKey, setTabKey] = useState('1')
  
  // const completeTrade = profile.buyer !== undefined && profile.buyer.filter()
  const exchanges = profile.ExchangeOffers !== undefined ? profile.ExchangeOffers : []
  const ongoing = profile.buyer !== undefined ? profile.buyer : []

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
      <div className="mt-5 row">
        <div className="col-xl-6 col-lg-12">
          <div className="card">
            <div className="card-body">
              <General10v1 data={profile} assets={assets} dispatch={dispatch} />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12">
          <div className="card text-white bg-primary">
            <General12v1 />
          </div>
        </div>
      </div>
      <div className="row">
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
                <TabPane tab="Ongoing Exchange" key="2" />
                <TabPane tab="Settings" key="3" />
              </Tabs>
            </div>
            <div className="card-body">
              {tabKey === '1' && (
                <div>
                  <ExchangeCard data={exchanges} assets={assets} dispatch={dispatch} loading={loading} />
                </div>
              )}
              {tabKey === '2' && (
                <div>
                  <OngoingCard data={ongoing} loading={loading} id={profile.userId} />
                </div>
              )}
              {tabKey === '3' && (
                <ProfileList data={profile} dispatch={dispatch} loading={loading} />
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12">
          <div className="card">
            <div className="card-header"><h5 className="text-gray-6">Recent Transaction History</h5></div>
            <div className="card-body">
              <List17 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Profile)
