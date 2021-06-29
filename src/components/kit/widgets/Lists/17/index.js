import React from 'react'
import style from './style.module.scss'

const List17 = () => {
  return (
    <ul className="list-unstyled">
      {[1, 2, 3, 4, 5].map(i =>(
        <li className={style.item}>
          <div key={i} className={`${style.separator} bg-success mr-3`} />
          {/* <span className={`${style.controlIndicator}`} /> */}
          <div className="d-inline-block">
            <div>Payment Received</div>
            <div className="text-muted">From themeforest</div>
          </div>
        </li>))}
      <li className={style.item}>
        <div className={`${style.separator} bg-primary mr-3`} />
        {/* <span className={`${style.controlIndicator}`} /> */}
        <div className="d-inline-block">
          <div>Payment Approved</div>
          <div className="text-muted">From themeforest</div>
        </div>
      </li>
    </ul>
  )
}

export default List17
