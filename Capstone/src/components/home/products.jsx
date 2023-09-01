import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
      <Form style={{ marginTop: '4vmin' }}>
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
                : products.title.toLowerCase().includes(search) ||
                products.category.toLowerCase().includes(search) ;
            })
            .map((product) => (
              <Card variant="dark" key={product.id} style={{ width: "35rem" }}>
                <Link to={`/products/${product.id}`}><Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "30rem" }}
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
{
  /*<Container>
         <Row>
           {products.map((product) => (
             <Col key={product.id}>
                   {product.category} <br />
                   <img src={product.image}></img> <br />
                   {product.title} <br />
                   {product.description} <br />
                   {product.id} <br />
                   {product.price} <br />
                   {product.rating.rate} <br />
                   {product.rating.count} <br />
             </Col>
           ))}
           </Row>
       </Container>*/
}
