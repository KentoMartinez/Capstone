import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

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
            <Navbar.Toggle style={{ marginRight: "1.5vmin",fontSize: "2.5vmin" }} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Nav.Link style={{ fontSize: "4vmin" }} href="/products">MONACO</Nav.Link>
            <Navbar.Brand onClick={handleShow}>
              <Button variant="light">
                <i style={{ fontSize: "3.5vmin" }} class="bi bi-person-circle"></i>
              </Button>
            </Navbar.Brand>

            <Navbar.Offcanvas placement="start">
              <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Offcanvas.Title style={{ fontSize: "3.5vmin"}} >Trending Now</Offcanvas.Title>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    style={{ color: "black" }}
                    variant="dark"
                    href="/products/category/electronics"
                  >
                    Best Sellers
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "black" }}
                    href="/products/category/jewerely"
                  >
                    New Releases
                  </Nav.Link>
                </Nav>
                <Offcanvas.Header>
                  <Offcanvas.Title>Shop by Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Nav className="flex-column">
                  <Nav.Link
                    style={{ color: "black" }}
                    variant="dark"
                    href="/products/category/electronics"
                  >
                    Electronics
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "black" }}
                    href="/products/category/jewerely"
                  >
                    Jewelery
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "black" }}
                    href="/products/category/men's clothing"
                  >
                    Men's Clothing
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "black" }}
                    href="/products/category/women's clothing"
                  >
                    Women's Clothing
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Container fluid>
        <Navbar.Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Nav.Link style={{ fontSize: "3.5vmin", color: "black" }} href="/cart">
                    User
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Nav.Link style={{ color: "black" }} href="#">
                    Cart
                  </Nav.Link>
                  <Nav.Link style={{ color: "black" }} href="#">
                    Orders
                  </Nav.Link>
                  <Nav.Link style={{ color: "red" }} href="/">
                    Log out
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </>
  );
}
