import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { BsChevronLeft, BsBagDash, BsBagPlus } from "react-icons/bs";

export default function Carts({ showMessage }) {
  const [carts, setCarts] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    function fetchCarts() {
      fetch(`https://fakestoreapi.com/carts/`)
        .then((res) => res.json())
        .then((json) => {
          const superUser = JSON.parse(localStorage.getItem("superUser"));
          console.log(superUser);
          const cartUser = json.find((cart) => cart.userId === superUser.id);
          setCarts(cartUser);
          console.log(cartUser);
          showMessage(username + "'s cart", "Success");
        })
        .catch((error) => {
          showMessage(error.message, "danger");
        });
    }
    fetchCarts();
  }, []);
  return (
    <>
      <h5>{" " + localStorage.getItem("username")}'s Cart</h5>
      {
        <Card key={carts.id} style={{ width: "70vmin" }}>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cart # {carts.id}</ListGroup.Item>
              <ListGroup.Item>User ID: {carts.userId}</ListGroup.Item>
              <ListGroup.Item>Date: {carts.date}</ListGroup.Item>
              <ListGroup.Item>
                Products:
                <ListGroup variant="flush">
                {carts.products && (
                carts.products.map((product) => (
                    <ListGroup.Item key={product.productId}>
                      Product # {product.productId}, Quantity:{" "}
                      {product.quantity}
                    </ListGroup.Item>
                ))
                )}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      }
    </>
  );
}
