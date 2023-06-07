import React from 'react'
import logo from '../Assets/asset 1.png'
import messagelogo from '../Assets/asset 2.png'
import '../Styles/Navbar.css'
import 'csshake';
import { Link } from 'react-router-dom';

const homelogo = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M200-160v-320H80l400-360 200 177v-117h80v191l120 108.574H760V-160H530v-240H430v240H200Zm60-60h110v-240h220v240h110v-341L480-761 260-561v341Zm110-240h220-220Zm25-110h170q0-33-25.5-54.5T480-646q-34 0-59.5 21.342Q395-603.315 395-570Z"/></svg>


const Navbar = () => {
  return (
    <>
    <header>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container navcontainer" >
       <div>
    <img src={logo} alt='img' />
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0 mx-5 nav-text">
        <li className="nav-item homelogo">
          <Link className="nav-link" aria-current="page" to="/">{homelogo} Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item dropdown">
        {/* // eslint-disable-next-line */}
          <a className="nav-link " href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/androidappdevelopment">Android App Development</a></li>
            <li><a className="dropdown-item" href="/iosappdevelopment"> iOS App Development</a></li>
            <li><a className="dropdown-item" href="/reactnativeapplication">React Native Application</a></li>
            <li><a className="dropdown-item" href="/websitedevelopment">Website Development</a></li>
            <li><a className="dropdown-item" href="/uiux">UI/UX</a></li>
            <li><a className="dropdown-item" href="/degitalmarketing">Degital Marketing</a></li>
            <li><a className="dropdown-item" href="/ecommercedevelopment">ECommerce Development</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/contactus">Contact Us</Link>
        </li>
        <li className="getin shake-slow shake-constant shake-constant--hover shake-chunk">
        <a className="rounded-5" aria-current="page" href="/contactus"><img  src={messagelogo} alt='img' /> Get In Touch</a>
        </li>
      </ul>
      </div>
  </div>
</nav>
</header>
    </>
  )
}

export default Navbar

