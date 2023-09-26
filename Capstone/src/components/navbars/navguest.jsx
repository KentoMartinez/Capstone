import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import {
  BsPersonPlus,
  BsHouseFill,
} from "react-icons/bs";

export default function NavbarGuest() {
  const [showLeft, setShowLeft] = useState(false);

  
  const handleCloseLeft = () => setShowLeft(false);
  const handleShowLeft = () => setShowLeft(true);

  return (
    <>
        <Navbar
          fixed="top"
          bg="dark"
           data-bs-theme="dark"
        >
          <Container fluid>
            <Nav>
            <Nav.Link onClick={handleShowLeft}>
              MONACO
            </Nav.Link>
            </Nav>
            <Nav className="flex-row">
              <Nav.Link href="/">
                <BsPersonPlus />
              </Nav.Link>
            </Nav>
</Container>
</Navbar>
            <Offcanvas
             fluid="md"
             bg="dark"
             data-bs-theme="dark"
              placement="start"
              show={showLeft}
              onHide={handleCloseLeft}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Monaco
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav>
                  <Nav.Link className="text-white"  onClick={() => {
                navigate("/guestproducts");
              }}">
                    <BsHouseFill /> Home
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>

      
    </>
  );
}
