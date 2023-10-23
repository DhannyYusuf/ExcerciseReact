import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

function NavbarLogin() {
  return (
    <Navbar bg="brown" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ma-auto">
            <div className="container-fluid p-4">
              <Outlet />
            </div>
            <Nav.Link href="/" style={{ color: "	rgb(205, 92, 92)" }}>
              Home
            </Nav.Link>

            <Nav.Link href="/about" style={{ color: "	rgb(205, 92, 92)" }}>
              About{" "}
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "	rgb(205, 92, 92)" }}>
              Contact
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "	rgb(205, 92, 92)" }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
