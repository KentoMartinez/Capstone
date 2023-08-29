import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

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
          style={{ width: "30rem" }}
        >
          <Card.Img
            variant="top"
            src={viewProductInfo.image}
            style={{ width: "25rem" }}
          />

          <Card.Body>
            <Card.Title>{viewProductInfo.title}</Card.Title>
            <Card.Text>
              Category: {viewProductInfo.category} <br />
              Description: {viewProductInfo.description} <br />
              Price: ${viewProductInfo.price} <br />
              Rating: {viewProductInfo.rating.rate} <br />
              Reviews: {viewProductInfo.rating.count} <br />
            </Card.Text>
            <Button
              variant="dark"
              onClick={() => {
                navigate(`/products`);
              }}
            >
              Back
            </Button>
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
