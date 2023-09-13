import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../Images/logo.png'

export function Header() {
    return (
        <div className="container mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 fs-6 fw-bold mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">DEPARTMENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">DOCTORS</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                        <button className="btn1 p-2 rounded border-0 " type="">Make an Appointment</button>
                        
                    </div>
                </div>
            </nav>
        </div>

    )
}
