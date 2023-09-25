import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactStars from "react-rating-stars-component";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { BsList, BsBagPlusFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsSearch } from "react-icons/bs";
import { addToCart } from "../user/cart";

export default function Products({ showMessage }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [pricing, setPricing] = useState(0);
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    function fetchMens() {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        json.sort((a, b) => b.rating.rate - a.rating.rate);
        json.sort((a, b) =>
        parseFloat(b.price) > parseFloat(a.price) ? 1 : -1
      )
        setProducts(json);
      })
      .catch((error) => {
        showMessage(error.message, "danger");
      });
    }
    fetchMens();
  }, []);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const pricingChanged = (newPricing) => {
    setPricing(newPricing.target.value);
  };
  
  const clearFilter = () => {
    setRating([]);
    setPricing([]);
  };
  return (
    <>
      <p style={{ marginTop: "8vmin" }}>MEN'S CLOTHING</p>
      <Container fluid="md">
        <Form style={{ marginTop: "6vmin" }}>
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
                  <Dropdown.Item>
                    Rating:
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#f4d004aa"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Form.Label 
                   >
                      Price Range:</Form.Label> <br />
                    <Form.Range
                     min={1}
                     max={1000}
                     step="0.5"
                     id="customRange3"
                     onChange={pricingChanged}
                      />
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Button onClick={clearFilter}
                     variant="primary">Clear Filters</Button>
                  </Dropdown.Item>
                  </DropdownButton> 
              </InputGroup>
            </Col>
          </Row>
        </Form>

        <Row>
        {products
            .filter((product) => {
              return pricing < product.price
            })
            .filter((product) => {
              return rating < product.rating.rate
            })
            .filter((products) => {
              return search.toLowerCase() === ""
                ? products
                : products.title.toLowerCase().includes(search) ||
                    products.category.toLowerCase().includes(search);
            })
            .map((product) => (
              <Col
                key={product.id}
                xs={12}
                sm={10}
                md={8}
                lg={6}
                xl={4}
                xxl={3}
              >
               <Card variant="dark" style={{ width: "100%", height: "100%" }}>
                  <Link to={`/products/${product.id}`}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "70%", height: "70%" }}
                    />
                    </Link>
                    <Card.ImgOverlay>
                    <Card.Text
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 6,
                        border: "none",
                        color: "black",
                        backgroundColor: "white",
                        padding: "10px",
                      }}
                    >
                      <b>${product.price}</b>
                    </Card.Text>

                    <Button
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 6,
                        border: "none",
                        color: "black",
                        backgroundColor: "white",
                        padding: "10px",
                      }}
                      onClick={() => addToCart(product, setCart)}
                    >
                      <BsBagPlusFill />
                      <Badge
                        style={{
                          position: "absolute",
                          top: 0,
                          right: -5,
                          border: "none",
                          padding: "4px",
                        }}
                        bg="light"
                        text="dark"
                      >
                        {}
                      </Badge>
                    </Button>
                    <Button
                      style={{
                        position: "absolute",
                        top: 34,
                        right: 6,
                        border: "none",
                        color: "black",
                        backgroundColor: "white",
                        padding: "10px",
                      }}
                      onClick={() => {
                        navigate(`/products/${product.id}`);
                      }}
                    >
                      <BsList />
                    </Button>
                  </Card.ImgOverlay>
                  <Card.Body
                    style={{
                      position: "absolute",
                      bottom: 0,
                      backgroundColor: "white",
                      width: "80%",
                      height: "45%",
                      padding: "10px",
                    }}
                  >
                    <Card.Text>
                      {product.title} <br /> {product.rating.rate} (
                      {product.rating.count} Reviews)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
