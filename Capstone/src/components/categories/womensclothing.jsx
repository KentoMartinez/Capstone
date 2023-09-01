import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function Womens() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    function fetchWomens() {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
    fetchWomens();
  }, []);
  return (
    <>
      <p style={{ marginTop: "4vmin" }}>WOMEN'S CLOTHING</p>
      <Container>
        <Form style={{ marginTop: "4vmin" }}>
          <InputGroup bg="dark" data-bs-theme="light" className="mb-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Products"
            />
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
                  style={{ width: "30rem" }}
                >
                  <Link to={`/products/${product.id}`}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "25rem" }}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Category: {product.category}
                      </ListGroup.Item>
                      <ListGroup.Item> Price: ${product.price}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
