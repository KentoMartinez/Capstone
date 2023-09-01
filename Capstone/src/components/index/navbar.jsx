import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

export default function NavbarPro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          expand={expand}
          className="bg-body-tertiary md-3"
        >
          <Container fluid>
            <Navbar.Brand onClick={handleShow}>MONACO</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <a href="#login">User</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/products">Home</Nav.Link>
                  <Nav.Link href="#action2">Cart</Nav.Link>
                  <Nav.Link href="#action2">Orders</Nav.Link>
                  <Nav.Link href="/">Log out</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Container fluid>
        <Navbar.Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Categories</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link  style={{ color: "black" }} variant="dark" href="/products/category/electronics">
                Electronics
              </Nav.Link>
              <Nav.Link  style={{ color: "black" }} href="/products/category/jewerely">Jewelery</Nav.Link>
              <Nav.Link  style={{ color: "black" }} href="/products/category/men's clothing">
                Men's Clothing
              </Nav.Link>
              <Nav.Link  style={{ color: "black" }} href="/products/category/women's clothing">
                Women's Clothing
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </>
  );
}
