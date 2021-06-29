import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Menu from '../Menu'
// import FavPages from './FavPages'
// import Search from './Search'
// import IssuesHistory from './IssuesHistory'
// import ProjectManagement from './ProjectManagement'
// import LanguageSwitcher from './LanguageSwitcher'
// import Actions from './Actions'
// import UserMenu from './UserMenu'
import style from './style.module.scss'

const mapStateToProps = ({dispatch}) =>({
  dispatch
})

const TopBar = ({dispatch}) => {

  const handleLogout =()=>{
    dispatch({
      type: 'user/LOGOUT',
    })
  }
  return (
    <div className={style.topbar}>
      <div className="mr-4">{/* <FavPages /> */}</div>
      <div className="mr-auto">{/* <Search /> */}</div>
      <div className="mr-4 d-none d-md-block">{/* <IssuesHistory /> */}</div>
      <div className="mb-0 mr-auto d-xl-block d-none"><Menu />{/* <ProjectManagement /> */}</div>
      <div className="mr-4 d-none d-sm-block">
        {/* <Link to="/whatsnew">
          <i className="fa fa-info-circle" /> What&apos;s new
        </Link> */}
      </div>
      <div className="mr-4 d-none d-sm-block">
        {/* <Link to="/contact">
          <i className="fa fa-comments" /> Contact Us
        </Link> */}
      </div>
      <div className="">
        <i className="fa fa-sign-out" role="button" tabIndex="0" onKeyPress={handleLogout} onClick={handleLogout} /> Logout
        {/* <UserMenu /> */}
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(TopBar)
