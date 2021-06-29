/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { Component } from 'react'
// import style from './style.module.scss'
import { Link } from 'react-router-dom'

class HomePage extends Component {

  render() {

    return (
      <div>
        <div className="home-top w-100">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={{minHeight:80}}>
            <div className="container-fluid my-3">
              <a className="navbar-brand fs-3 mx-5 fw-bold" href="#">LOGO</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll2" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll2">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll scr">
                  <li className="nav-item px-2 fw-bold">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item px-2 fw-bold">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item px-2 fw-bold">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item px-2 fw-bold">
                    <a className="nav-link" href="#">F.A.Q</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <Link to="/auth/login">
                    <button className="btn btn-lg btn-outline-primary mx-auto" style={{width:200}} type="submit">Get Started</button>
                  </Link>
                </form>
              </div>
            </div>
          </nav>
          <br />
          <div className="some-contents text-white mt-md-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 d-none d-md-block">
                  <div className="w-75 mx-auto">
                    <p className="fs-2 fw-bolder">lorem ipsum dolor sit amet consectetur adipisicing elit, Laboriosam.</p>
                    <p className="mt-3 fs-5">some other texts that might be coming into the page, probably if available.
                      <br />
                      woooo make i put Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto.
                    </p>
                    <br />
                    <button className="btn-download" type="button">Download App</button>
                  </div>
                </div>
                <div className="col-md-6 d-block d-md-none">
                  <div className=" mx-2">
                    <p className="fs-2 fw-bolder">lorem ipsum dolor sit amet consectetur adipisicing elit, Laboriosam.</p>
                    <p className="mt-3 fs-5">some other texts that might be coming into the page, probably if available.
                      <br />
                      woooo make i put Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto.
                    </p>
                    <br />
                  </div>
                  <button className="mx-auto btn-download" type="button">Download App</button>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <div>
                    <img src="/resources/images/home/header__image.png" alt="..." width="90%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-5">
          <div className="my-5 text-center">
            <p className="fs-1 fst-italic text-gray-6">Page Starts Here</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-3">
                <p className="fs-2 text-gray-6">This example demonstrates how to slide down a navbar when the user starts to scroll the page.</p>
                <p className="fs-4 text-gray-6">Scroll down this frame to see the effect!</p>
                <p className="fs-4 text-gray-6">Scroll to the top to hide the navbar.</p>
              </div>
              <div className="col-md-6 my-3">
                <img className="rounded w-75 mx-auto" src="/resources/images/home/bg.jpg" alt="..." width="" />
              </div>
              <div className="col-md-6 my-3">
                <img className="rounded w-75 mx-auto" src="/resources/images/home/bg4.jpg" alt="..." width="" />
              </div>
              <div className="col-md-6 my-3">
                <p className="fs-2 text-gray-6">This example demonstrates how to slide down a navbar when the user starts to scroll the page.</p>
                <p className="fs-4 text-gray-6">Scroll down this frame to see the effect!</p>
                <p className="fs-4 text-gray-6">Scroll to the top to hide the navbar.</p>
              </div>
              <div className="col-md-6 my-3">
                <p className="fs-2 text-gray-6">This example demonstrates how to slide down a navbar when the user starts to scroll the page.</p>
                <p className="fs-4 text-gray-6">Scroll down this frame to see the effect!</p>
                <p className="fs-4 text-gray-6">Scroll to the top to hide the navbar.</p>
              </div>
              <div className="col-md-6 my-3">
                <img className="rounded w-75 mx-auto" src="/resources/images/home/bg5.jpg" alt="..." width="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-layout">
          <div className="container" style={{marginTop: 120}}>
            <br />
            <div className="row">
              <div className="col-md-4">
                <div className="w-100">
                  <div className="w-75 mx-auto">
                    <img className="" src="/resources/images/home/download-icon.svg" alt="" width="80px" />
                    <span className="position-relative float-left ml-0 opacity">01</span>
                    <div className="text-white mt-5">
                      <p className="fs-5 fw-bold"> Download the client</p>
                      <p className="">Download and install the client from the official site. No personal data, such as phone number or email address.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-100">
                  <div className="w-75 mx-auto">
                    <img className="" src="/resources/images/home/login-icon.svg" alt="" width="80px" />
                    <span className="position-relative float-left ml-0 opacity">02</span>
                    <div className="text-white mt-5">
                      <p className="fs-5 fw-bold"> Create crypto container</p>
                      <p className="">Launch the system and create an account&apos;s crypto container. You can create several containers for each user.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-100">
                  <div className="w-75 mx-auto">
                    <img className="" src="/resources/images/home/shield-icon.svg" alt="" width="80px" />
                    <span className="position-relative float-left ml-0 opacity">03</span>
                    <div className="text-white mt-5">
                      <p className="fs-5 fw-bold"> Become a part of a team</p>
                      <p className="">Simple connection to the network and instant usage start. Implement Utopia and appreciate its abilities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-price">
          <br />
          <div className="container text-center mt-5 shadow">
            <div className="row">
              <div className="col-md-4">
                <div className="w-75 mx-auto">
                  <p className="fs-1 fw-bold text-primary">100 000</p>
                  <p style={{color: "gray"}}>Users already work with the ecosystem daily</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-75 mx-auto">
                  <p className="fs-1 fw-bold text-primary">40 000</p>
                  <p style={{color: "gray"}}>Users already earn <br />cryptocurrency via Mining</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-75 mx-auto">
                  <p className="fs-1 fw-bold text-primary">40 000</p>
                  <p style={{color:"gray"}}>Channels have already<br /> been created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="section-footer">
          <div className="container text-white">
            <div className="row">
              <div className="col-md-6">
                <br />
                <br />
                <div className=" my-5">
                  <p className="fs-1 fw-bold"> Start your protection now</p>
                  <p className="fs-5"> Take care of your data security on the internet. Use only privacy tools to ensure reliable online safety. Be under protection from the first moment.</p>
                </div>
                <button style={{height: 50}} type="button" className="fw-bold my-2 mx-auto btn btn-outline-primary w-50 rounded-3">Download App</button>
              </div>
              <div className="col-md-6">
                <div>
                  <img src="/resources/images/home/footer__image.png" alt="footer" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default HomePage
