import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBag, BsFillStarFill } from "react-icons/bs";

export default function NavbarAuth() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Nav.Link onClick={handleShow}>MONACO</Nav.Link>
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
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ color: "white" }}>
                  Trending
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav>
                  <Nav.Link href="/products/category/electronics">
                    Best Sellers
                  </Nav.Link>

                  <Nav.Link href="/products/category/jewerely">
                    New Releases
                  </Nav.Link>
                  <Nav.Link href="/products">
                    Home <BsFillStarFill />
                  </Nav.Link>
                </Nav>
                <br />

                <Offcanvas.Title style={{ color: "white" }}>
                  Categories
                </Offcanvas.Title>

                <br />
                <Nav>
                  <Nav.Link href="/products/category/electronics">
                    Electronics
                  </Nav.Link>
                  <Nav.Link href="/products/category/jewerely">
                    Jewelery
                  </Nav.Link>
                  <Nav.Link href="/products/category/men's clothing">
                    Men's Clothing
                  </Nav.Link>
                  <Nav.Link href="/products/category/women's clothing">
                    Women's Clothing
                  </Nav.Link>
                  <br />

                  <Offcanvas.Title style={{ color: "white" }}>
                    {" " + localStorage.getItem("username")}
                  </Offcanvas.Title>

                  <br />

                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                    style={{ color: "red" }}
                  >
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
