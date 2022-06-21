import './Nav.css'
import smac from '../assets/smac-logo.png'

export default function Nav() {
  return (
    <div className="navbar px-md-5 ps-1 pe-2">
      <div className="container-fluid">
        <div className="navbar-brand">
          <h1 className="fw-bold display-3 d-flex align-items-center"><img src={smac} width="90px" className="d-inline-block align-text-top"/><span className="text-light mx-md-3 mx-2">SMAC</span> TESTING</h1>
        </div>
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a className="prices nav-link fw-bold" style={{color: '#FBC740'}}>Prices</a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link text-dark fw-bold">Login</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
