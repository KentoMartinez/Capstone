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
import { BsSearch, BsList, BsBagCheck } from "react-icons/bs";

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
        <Form style={{ marginTop: "6vmin"}}>
          <Row>
          <Col xs={12} sm={10} md={8} lg={12} xl={12} xxl={12}>
          <InputGroup bg="dark" data-bs-theme="light" className="mb-3">
            <InputGroup.Text id="inputGroupPrepend">
              <BsSearch />
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
          </Col>
          </Row>
        </Form>
        <Row>
          <h2>BEST SELLERS</h2>
          <Col></Col>
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
              <Col key={product.id} xs={12} sm={10} md={8} lg={6} xl={4} xxl={3}>
                <Card variant="dark" key={product.id} style={{ width: "100%", height: "100%" }}>
                  <Link to={`/products/${product.id}`}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "80%", height: "100%" }}
                    />
                  </Link>
                  <Card.ImgOverlay>
                    <Button
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        border: "none",
                        color: "black",
                        backgroundColor: "white",
                      }}
                      onClick={() => {
                        navigate(`/products/${product.id}`);
                      }}
                    >
                      <BsList />
                    </Button>

                    <Button
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        border: "none",
                        color: "black",
                        backgroundColor: "white",
                      }}
                      onClick={() => {
                        navigate(`#`);
                      }}
                    >
                      <BsBagCheck />
                    </Button>
                  </Card.ImgOverlay>
                  <Card.Body style={{
                        position: "absolute",
                        bottom: 0,
                        backgroundColor: "white",
                        width: "80%",
                        height: "15%"
                      }}>
                    <Card.Text>${product.price}</Card.Text>
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
