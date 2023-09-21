import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BsBag,
  BsStar,
  BsHouseFill,
  BsPlug,
  BsGem,
  BsGenderMale,
  BsGenderFemale,
  BsPersonFill,
  BsBoxArrowInLeft,
} from "react-icons/bs";

export default function NavbarAuth() {
  const [showLeft, setShowLeft] = useState(false);
  const handleCloseLeft = () => setShowLeft(false);
  const handleShowLeft = () => setShowLeft(true);
  const navigate = useNavigate();

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
              <Nav.Link onClick={handleShowLeft}>MONACO</Nav.Link>
            </Nav>

            <Nav className="flex-row">
              <Nav.Link href="/cart">
                <BsBag />
              </Nav.Link>
            </Nav>

            <Navbar.Offcanvas
              bg="dark"
              data-bs-theme="dark"
              placement="start"
              show={showLeft}
              onHide={handleCloseLeft}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ color: "white" }}>
                  MONACO
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav>
                  <Nav.Link href="/products">
                    <BsHouseFill /> Home
                  </Nav.Link>
                  <Nav.Link href="/products/category/electronics">
                    <BsStar /> Best Sellers
                  </Nav.Link>
                </Nav>

                <Nav>
                  <Nav.Link href="/products/category/electronics">
                    <BsPlug /> Electronics
                  </Nav.Link>
                  <Nav.Link href="/products/category/jewerely">
                    <BsGem /> Jewelery
                  </Nav.Link>
                  <Nav.Link href="/products/category/men's clothing">
                    <BsGenderMale /> Men's Clothing
                  </Nav.Link>
                  <Nav.Link href="/products/category/women's clothing">
                    <BsGenderFemale /> Women's Clothing
                  </Nav.Link>
                  <br />
                  <Nav>
                    <Nav.Link href="/profile">
                      <BsPersonFill />
                      {" " + localStorage.getItem("username")}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => {
                        localStorage.clear();
                        navigate("/") ;
                      }}
                    >
                      <BsBoxArrowInLeft /> Log out
                    </Nav.Link>
                  </Nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
