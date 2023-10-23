import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarPage() {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="container-fluid p-4">
              <Outlet />
            </div>
            <MDBNavbarBrand href='#'>
            <img
              src='https://www.pylondesign.co.uk/wp-content/uploads/2015/12/Codex-Logo-page-1.jpg'
              height='30'
              alt=''
              loading='lazy'
            />
            Code X Academy
          </MDBNavbarBrand>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/home/post">Posting</Nav.Link>
            <Nav.Link href="/home/about">About</Nav.Link>
            <Nav.Link href="/home/contact">Contact</Nav.Link>
            <Nav.Link href="/">LogOut</Nav.Link>
            
            {/* <NavDropdown title="Posting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Input Posting
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                List Posting
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarPage;
