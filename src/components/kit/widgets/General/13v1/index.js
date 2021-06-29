import React from 'react'
import style from './style.module.scss'


const General13v1 = () => {
  return (
    <div style={{width:300}}>
      <div
        className={`height-150 d-flex flex-column ${style.head}`}
        style={{
          backgroundImage: 'url(resources/images/content/flowers.jpg)',
        }}
      >
        <div className="card-header card-header-flex border-bottom-0">
          <div className="d-flex flex-column justify-content-center">
            <h5 className="mb-0 text-white">Basic Card</h5>
          </div>
        </div>
        <div className="mt-auto mb-3">
          <div className="text-white font-size-24 font-weight-bold pl-4">David Beckham</div>
        </div>
      </div>
      <div className="card card-borderless">
        <div className="card-body pt-1 text-gray-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </div>
      </div>
    </div>
  )
}

export default General13v1
