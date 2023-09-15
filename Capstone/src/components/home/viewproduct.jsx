import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function ViewProducts({showMessage}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewProductInfo, setViewProductInfo] = useState();

  useEffect(() => {
    function fetchViewProducts() {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setViewProductInfo(json);
        showMessage("Product's Details" ,'Success');
        })
        .catch((error) => {
          showMessage(error.message,'danger');
        });
    }
    fetchViewProducts();
  }, []);

  return (
    <>
      {viewProductInfo ? (
        <Card

          variant="dark"
          key={viewProductInfo.id}
          style={{ width: "70vmin", marginTop: "4vmin" }}
        >
          <div className="flex-container">
            <div className="image-container">
              <Card.Img
                variant="top"
                src={viewProductInfo.image}
                style={{ width: "60vmin" }}
              />
            </div>
            <div className="info-container">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Button
                   style={{ border:"none", color: "black",backgroundColor: "turquoise"}}
                    onClick={() => {
                      navigate(`/products`);
                    }}
                  >
                    Back
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Price: ${viewProductInfo.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Rating: {viewProductInfo.rating.rate}
                </ListGroup.Item>
                <ListGroup.Item>
                  Reviews: {viewProductInfo.rating.count}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <Card.Body style={{ marginLeft: "1rem" }}>
            <Card.Title>{viewProductInfo.title}</Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item>
                Category: {viewProductInfo.category}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {viewProductInfo.description}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
