import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="ms-auto">
        Western Ghats
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-4">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="me-4">
              Discover History
            </Nav.Link>
            <Nav.Link href="#about" className="me-4">
              Explore Nature
            </Nav.Link>
            <Nav.Link href="#about" className="me-4">
                Nature Walk
            </Nav.Link>
            <NavDropdown
              title="Pictures"
              id="basic-nav-dropdown"
              className="me-4"
            >
              <NavDropdown.Item href="#action/3.1">Animals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Birds</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fishes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className="me-4">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
