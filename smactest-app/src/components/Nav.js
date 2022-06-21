import './Nav.css'
import smac from './smac-logo.png'

export default function Nav() {
  return (
    <div className="navbar px-5">
      <div className="navbar-brand">
        <h1 className="fw-bold display-3"><img src={smac} width="90px" /><span className="text-light ms-3">SMAC</span> TESTING</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-dark fw-bold">Login</a>
        </li>
      </ul>

    </div>
  )
}
