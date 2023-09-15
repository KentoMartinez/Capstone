import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useNavigate } from "react-router-dom";

export default function Womens({showMessage}) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
const navigate = useNavigate ();
  useEffect(() => {
    function fetchWomens() {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        
        })
        .catch((error) => {
          showMessage(error.message,'danger');
        });
    }
    fetchWomens();
  }, []);
  return (
    <>
      <p style={{ marginTop: "8vmin" }}>WOMEN'S CLOTHING</p>
      <Container>
        <Form style={{ marginTop: "4vmin" ,  width: "70vmin" }}>
          <InputGroup bg="dark" data-bs-theme="light" className="mb-3">
            <Form.Control
              aria-label="Text input with dropdown button"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Products"
            />
            <DropdownButton
              variant="outline-secondary"
              title="Filter"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="/products">Home</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/products/category/electronics">
                Electronics
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/products/category/jewerely">
                Jewerely
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/products/category/men's clothing">
                Men's Clothing
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/products/category/women's clothing">
                Womes's Clothing
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form>
        <Row>
          <Col>
            {products
              .filter((products) => {
                return search.toLowerCase() === ""
                  ? products
                  : products.title.toLowerCase().includes(search);
              })
              .map((product) => (
                <Card
                  variant="dark"
                  key={product.id}
                  style={{ width: "70vmin" }}
                >
                  <Card.Title>{product.title}</Card.Title>
                  <div className="flex-container">
                    <div className="image-container">
                      <Link to={`/products/${product.id}`}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          style={{ width: "50vmin" }}
                        />
                      </Link>
                    </div>
                    <div className="info-container">
                      <ListGroup variant="flush">
                      <div className="flex-container"
                        style={{marginInline: "4vmin", alignContent: "space-between"}}>
                          <Button
                            style={{
                              border: "none",
                              color: "black",
                              backgroundColor: "orange",
                            }}
                            onClick={() => {
                              navigate(`#`);
                            }}
                          >
                            Add to Cart
                          </Button>
                          <Button
                            style={{
                              border: "none",
                              color: "black",
                              backgroundColor: "turquoise",
                            }}
                            onClick={() => {
                              navigate(`/products/${product.id}`);
                            }}
                          >
                            View
                          </Button>
                        </div>
                        <ListGroup.Item> Product # {product.id}</ListGroup.Item>
                        <ListGroup.Item>
                          Category: {product.category}
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                      </ListGroup>
                    </div>
                  </div>
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
