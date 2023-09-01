import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Splash() {
  return (
    <div className="splash-container d-flex justify-content-center align-items-start">
      <div className="splash-content text-center pl-10">
        <img src={logo} alt="Logo" className="logo-image" />
        <h2>
          Salute the sun and relax in savasana at these hotels with onsite yoga
          and spa
        </h2>
        <Link to="/home" className="btn btn-outline-primary mt-1">
          Find a hotel!
        </Link>
      </div>
    </div>
  )
}
