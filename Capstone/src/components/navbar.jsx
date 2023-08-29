import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function NavbarPro() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary md-3">
          <Container fluid>
            <Navbar.Brand href="#"> <Button size="lg" variant="light" onClick={handleShow}>
        MONACO
      </Button></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  (Username) <br />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action2">Porfile</Nav.Link>
                  <Nav.Link href="#action2">Cart</Nav.Link>
                  <Nav.Link href="#action2">Orders</Nav.Link>
                  <Nav.Link href="#action2">Sign out</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-start flex-grow-1 pe-5">
                  <Nav.Link href="#action2">Electronics</Nav.Link>
                  <Nav.Link href="#action2">Jewelery</Nav.Link>
                  <Nav.Link href="#action2">Men's Clothing</Nav.Link>
                  <Nav.Link href="#action2">Women's Clothing</Nav.Link>
                </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
