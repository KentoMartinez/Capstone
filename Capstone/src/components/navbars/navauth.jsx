import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";


export default function NavbarAuth() {
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
          <Nav.Link onClick={handleShow}  style={{color: "white"}}>
               MONACO
               </Nav.Link> 
          
            <Nav className="flex-row">
              
            <Nav.Link  href="/profile" style={{color: "white"}}>
            
               {" "+localStorage.getItem("username")}
               </Nav.Link>
            <Nav.Link href="/products">Home</Nav.Link>
              
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/orders">Orders</Nav.Link>
              <Nav.Link style={{ color: "red" }} href="/">
              
                Log out
              </Nav.Link>
            </Nav>

            <Navbar.Offcanvas
             
             bg="dark"
             data-bs-theme="dark"
              placement="start"
              show={show}
              onHide={handleClose}
            > 
              <Offcanvas.Header 
               closeButton>
                <Offcanvas.Title
                  style={{ color: "red" }}
                >
                  Trending Now
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav >
                  <Nav.Link href="/products/category/electronics">
                    Best Sellers
                  </Nav.Link>

                  <Nav.Link href="/products/category/jewerely">
                    New Releases
                  </Nav.Link>
                </Nav>
                <br />
                <Offcanvas.Header>
                  <Offcanvas.Title style={{ color: "red" }}>
                    Shop by Categories
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <br />
                <Nav >
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
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
