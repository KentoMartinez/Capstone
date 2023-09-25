import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../user/cart";

import {
  BsBag,
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
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const handleCloseLeft = () => setShowLeft(false);
  const handleShowLeft = () => setShowLeft(true);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <>
      <Navbar fixed="top" expand={false} bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Nav>
            <Nav.Link onClick={handleShowLeft}>MONACO</Nav.Link>
          </Nav>

          <Nav className="flex-row">
            <Nav.Link onClick={handleShowCart}>
              <BsBag />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas
      
        bg="dark"
        data-bs-theme="dark"
        show={showLeft}
        onHide={handleCloseLeft}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Monaco</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav>
            <Nav.Link href="/products">
              <BsHouseFill /> Home
            </Nav.Link>
          </Nav>
          <br />
          <Nav>
            <Nav.Link href="/products/category/electronics">
              <BsPlug /> Electronics
            </Nav.Link>
            <Nav.Link href="/products/category/jewelry">
              <BsGem /> Jewelry
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
                  navigate("/");
                }}
              >
                <BsBoxArrowInLeft /> Log out
              </Nav.Link>
            </Nav>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        bg="dark"
        data-bs-theme="dark"
        show={showCart}
        onHide={handleCloseCart}
        placement="end"
        backdrop={false} // You can customize this as needed
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
