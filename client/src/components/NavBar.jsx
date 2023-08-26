import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="navbar-container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            {" "}
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Favourites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favourites"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
