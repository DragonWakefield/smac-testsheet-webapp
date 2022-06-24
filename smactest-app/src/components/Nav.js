import './Nav.css'
import smac from '../assets/smac-logo.png'

import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

export default function Nav() {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  return (
    <div className="navbar px-md-5 ps-1 pe-2">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="fw-bold display-3 d-flex align-items-center"><img src={smac} width="90px" className="d-inline-block align-text-top" alt="SMAC Logo"/><span className="text-light mx-md-3 mx-2">SMAC</span> TESTING</Link>
        </div>
        <ul className="navbar-nav flex-row">
          <li className="nav-item ms-3">
            {user && <Link to="/sheets" className="nav-link fw-bold" style={{color: '#FBC740'}}>All Test sheets</Link>}
          </li>
          <li className="nav-item ms-3">
            {!user && <Link to="/login" className="nav-link text-dark fw-bold">Login</Link>}
            {user && <button className="btn btn-dark" onClick={logout}>Logout</button>}
          </li>
        </ul>
      </div>
    </div>
  )
}
