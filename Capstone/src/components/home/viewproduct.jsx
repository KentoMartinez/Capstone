import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function ViewProducts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewProductInfo, setViewProductInfo] = useState();

  useEffect(() => {
    function fetchViewProducts() {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setViewProductInfo(json));
    }
    fetchViewProducts();
  }, []);

  return (
    <>
      {viewProductInfo ? (
        <Card
          variant="dark"
          key={viewProductInfo.id}
          style={{ width: "40rem" }}
        >
          <Card.Img
            variant="top"
            src={viewProductInfo.image}
            style={{ width: "35rem" }}
          />

          <Card.Body>
            <Card.Title>{viewProductInfo.title}</Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item>
                Category: {viewProductInfo.category}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                Description: {viewProductInfo.description}
              </ListGroup.Item>
              <ListGroup.Item> Price: ${viewProductInfo.price}</ListGroup.Item>
              <ListGroup.Item>
                {" "}
                Rating: {viewProductInfo.rating.rate}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                Reviews: {viewProductInfo.rating.count}
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="warning"
              onClick={() => {
                navigate(`#`);
              }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
