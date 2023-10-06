import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="navbar-container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{ width: "300px" }}
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}></div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-links">
              <i className="fas fa-search"></i> Search
            </Link>
            <br></br>
          </li>
          <li className="nav-item">
            <Link to="/favourites" className="nav-links ml-3">
              <i className="fas fa-heart"></i> Favourites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
