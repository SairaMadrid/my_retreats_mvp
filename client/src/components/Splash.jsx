import React from "react"
import { Link } from "react-router-dom"

export default function Splash() {
  return (
    <div className="container text-center">
      <p>
        Salute the sun and relax in savasana at these hotels with onsite yoga
      </p>
      <Link to="/home" className="btn btn-outline-primary mt-1">
        Find a hotel!
      </Link>
    </div>
  )
}
