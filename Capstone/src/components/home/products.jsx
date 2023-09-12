import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
        <Form style={{ marginTop: "6vmin", width: "70vmin" }}>
      
        
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
              title="Filter"
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
          <Col>
            {products
              .filter((products) => {
                return search.toLowerCase() === ""
                  ? products
                  : products.title.toLowerCase().includes(search) ||
                      products.category.toLowerCase().includes(search);
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
