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
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{ width: "150px" }}
            />
          </Link>

          <div className="menu-icon" onClick={handleClick}></div>

          <Link to="/home" className="nav-links">
            Home
          </Link>

          <Link to="/favourites" className="nav-links">
            Favourites
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
