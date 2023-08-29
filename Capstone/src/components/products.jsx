import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
        <Row>
          <Col md={2}>
            {products.map((product) => (
              <Card variant="dark" key={product.id} style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "20rem" }}
                />

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Category: {product.category} <br />
                    Price: ${product.price} <br />
                  </Card.Text>

                  <Button
                    variant="success"
                    onClick={() => {
                      navigate(`/products/${product.id}`);
                    }}
                  >
                    View Details
                  </Button>
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
