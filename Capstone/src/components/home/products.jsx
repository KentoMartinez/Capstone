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
import { BsFillSearchHeartFill, BsBagCheck} from "react-icons/bs"

export default function Products({ showMessage }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function fetchProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())

        .then((json) => {
          setProducts(json);
        })
        .catch((error) => {
          showMessage(error.message, "danger");
        });
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
        <Form style={{ marginTop: "6vmin", width: "100%" }}>
          <InputGroup bg="dark" data-bs-theme="light" className="mb-3">
            <InputGroup.Text id="inputGroupPrepend">
            <BsFillSearchHeartFill />
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
          <h2>BEST SELLERS</h2>
          <Col>
          
          </Col>
        </Row>
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
                <Card
                  variant="dark"
                  key={product.id}
                  style={{ width: "100%" }}
                >
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
                      <BsBagCheck />
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
