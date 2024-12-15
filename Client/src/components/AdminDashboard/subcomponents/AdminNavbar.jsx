/* eslint-disable react/prop-types */
import { Navbar, Nav, Container, Image } from "react-bootstrap";

function AdminNavbar({ adminPhoto, adminEmail, setActivePage }) {
  return (
    <Navbar bg="light" expand="lg" className="position-fixed end-0 top-0 vh-100">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column ms-auto">
            {/* Admin Photo */}
            <Nav.Item className="me-3 mb-3">
              <Image src={adminPhoto} roundedCircle height="40" width="40" alt="Admin" />
            </Nav.Item>

            {/* Admin Email */}
            <Nav.Item className="me-3 mb-3">
              <span className="navbar-text">{adminEmail}</span>
            </Nav.Item>

            {/* Navigation Links */}
            <Nav.Link onClick={() => setActivePage("dashboard")}>Admin Dashboard</Nav.Link>
            <Nav.Link onClick={() => setActivePage("result")}>Admin Result</Nav.Link>
            <Nav.Link onClick={() => setActivePage("questions")}>Admin Questions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
