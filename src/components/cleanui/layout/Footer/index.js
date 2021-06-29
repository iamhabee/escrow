import React from 'react'
import style from './style.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerInner}>
        <a
          href="https://estate+plus.com"
          target="_blank"
          rel="noopener noreferrer"
          className={style.logo}
        >
          Escrow
          {/* <span /> */}
        </a>
        <br />
        <p className="mb-0">
          Copyright © 2017-2020 Escrow |{' '}
          <a href="https://www.mediatec.org/privacy" className="text-primary" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
