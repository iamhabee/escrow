import React from 'react'
import style from './style.module.scss'

const ProfileCard = ({data}) => {
  return (
    <div className="d-flex flex-wrap flex-column align-items-center p-3" style={{backgroundColor:"#367199"}}>
      <div className="kit__utils__avatar kit__utils__avatar--size64 mb-3">
        <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
      </div>
      <div className="text-center">
        <div className="text-white font-weight-bold font-size-18">{data.first_name} {data.last_name}</div>
        <div className="text-white text-uppercase font-size-12 mb-3">Estate @{data.estate_name}</div>
        <button type="button" className={`btn btn-primary ${style.btnWithAddon}`}>
          <span className={`${style.btnAddon}`}>
            <i className={`${style.btnAddonIcon} fe fe-edit`} />
          </span>
          Update Image
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
