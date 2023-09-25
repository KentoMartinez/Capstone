import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { BsPersonPlus, BsStar, BsHouseFill } from "react-icons/bs";

export default function NavbarGuest() {
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
          bg="dark"
          data-bs-theme="dark"
        >
          <Container fluid>
            <Nav>
              <Nav.Link onClick={handleShow}>MONACO</Nav.Link>
            </Nav>
            <Nav className="flex-row">
              <Nav.Link href="/">
                <BsPersonPlus />
              </Nav.Link>
            </Nav>

            <Navbar.Offcanvas
              bg="dark"
              data-bs-theme="dark"
              placement="start"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ color: "white" }}>
                  MONACO
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav>
                  <Nav.Link href="/guestproducts">
                    <BsHouseFill /> Home
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
