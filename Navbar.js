import React from 'react'

const Navbar = () => {
    return (
        <div className="head-part">
        <h1 className="main-heading">Organic <br/><span>Farm</span></h1>
        <div className="navigation-info">
          <ul className="Nav-items">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">Services</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
            <li className="nav-item"><a href="#">About Us</a></li>
          </ul>
          </div>
        </div>
    )
}

export default Navbar
