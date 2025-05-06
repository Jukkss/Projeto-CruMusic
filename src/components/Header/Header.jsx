import React from 'react'
import logoCruMusic from '../../assents/logo/CruMusic_LogoLetBranco.png'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid"> 
        <div class="row">
            <div className="col-md-12 text-center">
                <nav className="navbar bg-body-tertiary  p-0 m-0">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                    <a className="navbar-brand" href="../index.html">
                      <img src={logoCruMusic} alt="Logo" className="Logo"/>
                    </a>
                    </div>
              </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header