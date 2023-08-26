import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="navbar-container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            {" "}
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div className="menu-icon" onClick={handleClick}></div>

          <li className="nav-item">
            <Link to="/home" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favourites" className="nav-links">
              Favourites
            </Link>
          </li>
        </div>
      </nav>
    </>
  )
}

export default Navbar
