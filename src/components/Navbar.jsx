import React from 'react'
//import { BrowserRouter as Router } from 'react-router-dom'
 


const Navbar = ()=> {
    return (
       <>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="test">Coderrzz</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="test">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="test">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="test">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="test" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav></> 
    )
}

export default Navbar
