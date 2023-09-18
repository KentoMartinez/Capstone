import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useNavigate } from "react-router-dom";

export default function Womens({ showMessage }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    function fetchWomens() {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        })
        .catch((error) => {
          showMessage(error.message, "danger");
        });
    }
    fetchWomens();
  }, []);
  return (
    <>
      <p style={{ marginTop: "8vmin" }}>WOMEN'S CLOTHING</p>
      <Container>
        <Form style={{ marginTop: "6vmin", width: "100%" }}>
          <InputGroup bg="dark" data-bs-theme="light" className="mb-3">
            <InputGroup.Text id="inputGroupPrepend">
              <i class="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              aria-label="Text input with dropdown button"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Products"
            />
            <DropdownButton
              variant="outline-secondary"
              title="Filters"
              id="input-group-dropdown-2"
              align="end"
            >
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
          {products
            .filter((products) => {
              return search.toLowerCase() === ""
                ? products
                : products.title.toLowerCase().includes(search) ||
                    products.category.toLowerCase().includes(search);
            })
            .map((product) => (
              <Col key={product.id} md={3}>
                <Card variant="dark" key={product.id} style={{ width: "100%" }}>
                  <Link to={`/products/${product.id}`}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "100%" }}
                    />
                  </Link>

                  <Card.Body>
                    <Card.Text>{product.title}</Card.Text>
                    <Card.Title>${product.price}</Card.Title>
                    <Button
                      style={{
                        border: "none",
                        color: "black",
                        backgroundColor: "lightgray",
                      }}
                      onClick={() => {
                        navigate(`#`);
                      }}
                    >
                      +
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
