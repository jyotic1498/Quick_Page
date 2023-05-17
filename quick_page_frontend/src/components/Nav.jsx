import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'
import logo from './QP.png'
const Nav = () => {
  let user = JSON.parse(localStorage.getItem('gjsProject'))
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate('/Singup')
  }
  return (
    < div >
      <nav
        className="navbar navbar-expand-lg navbar-scroll shadow-0"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <NavLink className="navbar-brand disabled">
            <img src={logo} alt="" height={40} width={40} />
            Quick Page
          </NavLink>
          <button
            className="navbar-toggler ps-0"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="d-flex justify-content-start align-items-center">
              <i className="fas fa-bars" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/About">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/Contfeed">
                  Contact/Feedback
                </Link>
              </li>

            </ul>

            <div className="navbar-nav flex-row">
              {
                !localStorage.getItem('gjsProject') ?

                  <>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/Login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/Signup">
                        Sign Up
                      </Link>
                    </li>
                  </>
                  : null
              }
              {/* {
                !localStorage.getItem('gjsProject') ?
                  <>
                    <li>
                      <Link className="nav-link px-3" to='/Login' onClick={logOut}>
                        Logout
                      </Link>
                    </li>
                  </>
                  : null
              } */}
            </div>

          </div>
        </div>
      </nav>
    </div >
  )
}

export default Nav  