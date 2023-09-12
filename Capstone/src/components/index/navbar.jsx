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
          <Container
            style={{ backgroundColor: "gray", marginTop: "-1vmin" }}
            fluid
          >
            <Navbar.Brand onClick={handleShow}>
              <i style={{ fontSize: "5vmin" }} class="bi bi-list"></i>
            </Navbar.Brand>
            <Nav.Link style={{ fontSize: "4vmin" }} href="/products">
              MONACO
            </Nav.Link>

            <Nav.Link href="/cart">
              <i style={{ fontSize: "4vmin" }} class="bi bi-cart"></i>
            </Nav.Link>

            <Navbar.Offcanvas
              style={{ backgroundColor: "lightGray" }}
              placement="start"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Offcanvas.Title style={{ fontSize: "3.5vmin" }}>
                    Trending Now
                  </Offcanvas.Title>
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
                  <Offcanvas.Header>
                    <Offcanvas.Title>Help and Settings </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Nav.Link style={{ color: "black" }} href="/user">
                    Porfile
                  </Nav.Link>
                  <Nav.Link style={{ color: "black" }} href="#">
                    Orders
                  </Nav.Link>
                  <Nav.Link style={{ color: "red" }} href="/">
                    Log out
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
