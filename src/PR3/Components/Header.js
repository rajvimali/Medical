import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../Images/logo.png'
function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className='logo'><img src={logo} alt="" className="src" width="100%" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#service">SERVICES</Nav.Link>
                        <Nav.Link href="#deprtments">DEPARTMENTS</Nav.Link>
                        <NavDropdown title="DROPDOWN" id="basic-nav-dropdown">
                            <Nav.Link href="#doctors">DOCTORS</Nav.Link>
                            <NavDropdown.Item href="#action/3.1">DROPDOWN</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button className='btn px-5 rounded btn1 text-white'>Make an Appoinment</button>
            </Container>
        </Navbar>
    );
}

export default Header;