import React from 'react'
// import { Layout } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import BillingPage from './Billing'

const mapStateToProps = ({ settings }) => ({
  isContentMaxWidth: settings.isContentMaxWidth,
  isAppMaxWidth: settings.isAppMaxWidth,
  isGrayBackground: settings.isGrayBackground,
  isSquaredBorders: settings.isSquaredBorders,
  isCardShadow: settings.isCardShadow,
  isBorderless: settings.isBorderless,
  isTopbarFixed: settings.isTopbarFixed,
  isGrayTopbar: settings.isGrayTopbar,
})

const Billing = ({ isGrayBackground }) => {
  return (
    <div className={classNames({ cui__layout__grayBackground: isGrayBackground })}>
      <BillingPage />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(Billing))
