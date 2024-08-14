import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="m-lg-auto" collapseOnSelect>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Offcanvas placement="end" aria-labelledby="basic-navbar-nav">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Nav variant="pills" className="" defaultActiveKey={location.pathname}>
          
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" eventKey="/">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/portfolio" eventKey="/portfolio">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/resume" eventKey="/resume">
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact" eventKey="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default NavBar;

