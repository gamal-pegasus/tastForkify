import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Pizza</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/corn">Corn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/goat">Goat</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  
  
  
  </>
}
