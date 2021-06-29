// import List20 from 'components/kit/widgets/Lists/20'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Drawer } from 'antd'
import {UsergroupAddOutlined} from '@ant-design/icons';
import PerfectScrollbar from 'react-perfect-scrollbar'
import style from './style.module.scss'
import Friend from './friend'

const mapStateToProps = ({ settings, dispatch, user }) => ({
  dispatch,
  isMobileView: settings.isMobileView,
  isMobileMenuOpen: settings.isMobileMenuOpen,
  leftMenuWidth: settings.leftMenuWidth,
  bestSeller: user.bestSeller,
})
const FriendsAndBuyersList = ({isMobileView, leftMenuWidth, dispatch}) => {

  useEffect(() => {
    dispatch({
      type:"user/BEST_SELLER"
    })
    // eslint-disable-next-line
  }, [])

  const [showFriendList, setShowFriendList] = useState(false)
  if (isMobileView) {
    return (
      <div>
        <div
          className={style.handler}
          onClick={()=>setShowFriendList(true)}
          onFocus={e => {
            e.preventDefault()
          }}
          onKeyPress={()=>setShowFriendList(true)}
          role="button"
          tabIndex="0"
        >
          <UsergroupAddOutlined />
          {/* <div className={style.handlerIcon} /> */}
        </div>
        <Drawer
          closable={false}
          visible={showFriendList}
          placement="right"
          className={style.mobileMenu}
          onClose={()=>setShowFriendList(false)}
          maskClosable
          getContainer={null}
          width={leftMenuWidth}
        >
          <h5 className="text-gray-6 px-4 pt-3">Most Popular Seller</h5>
          <Friend />
        </Drawer>
      </div>
    )
  }
  return (
    <PerfectScrollbar>
      <div style={{ marginTop:20, padding:10}}>
        <h5 className="text-gray-6">Most Popular Seller</h5>
        <Friend />
        {/* <h5 className="text-gray-6">Most Popular Buyers</h5>
        <Friend /> */}
      </div>
    </PerfectScrollbar>
  )
}

export default connect(mapStateToProps)(FriendsAndBuyersList)
