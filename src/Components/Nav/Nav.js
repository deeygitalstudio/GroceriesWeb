import React from 'react'
import cart from "../images/cart2.png"
import logo from "../images/logo2.png"
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top w3-card">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="true">Feature</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="true">Contact</a>
        </li>
      </ul>
    
        <img src={cart} alt="" />
  
    </div>
  </div>
</nav>
  )
}

export default Nav