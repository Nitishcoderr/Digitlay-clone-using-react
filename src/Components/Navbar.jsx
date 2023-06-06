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
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container navcontainer" >
       <div>
    <img src={logo} />
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className='right'>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5 nav-text">
        <li class="nav-item homelogo">
          <Link class="nav-link" aria-current="page" to="/">{homelogo} Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/androidappdevelopment">Android App Development</a></li>
            <li><a class="dropdown-item" href="/iosappdevelopment"> iOS App Development</a></li>
            <li><a class="dropdown-item" href="/reactnativeapplication">React Native Application</a></li>
            <li><a class="dropdown-item" href="/websitedevelopment">Website Development</a></li>
            <li><a class="dropdown-item" href="/uiux">UI/UX</a></li>
            <li><a class="dropdown-item" href="/degitalmarketing">Degital Marketing</a></li>
            <li><a class="dropdown-item" href="/ecommercedevelopment">ECommerce Development</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/contactus">Contact Us</a>
        </li>
        <li class="getin shake-slow shake-constant shake-constant--hover shake-chunk">
        <a className="rounded-5" aria-current="page" href="/contactus"><img  src={messagelogo}/> Get In Touch</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</header>
    </>
  )
}

export default Navbar

