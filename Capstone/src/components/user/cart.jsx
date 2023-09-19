import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Carts({ showMessage }) {
  const [carts, setCarts] = useState([]);
  localStorage.setItem("username", JSON.stringify(superUser));

  useEffect(() => {
    function fetchCarts() {
      fetch(`https://fakestoreapi.com/carts`)
        .then((res) => res.json())
        .then((json) => {
          
          showMessage(username + "'s cart", "Success");
          const cartUser = json.filter(
            (cart) => cart.userId === username
          );
          setCarts(cartUser);
          console.log(cartUser);
        })
        .catch((error) => {
          showMessage(error.message, "danger");
        });
    }
    fetchCarts();
  }, []);
  return (
    <>
      <h3 style={{ marginTop: "5.5vmin" }}>
        Your Shopping Cart</h3>
      {carts.map((cart) => (
        <Card key={cart.id} style={{ width: "70vmin" }}>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cart # {cart.id}</ListGroup.Item>
              <ListGroup.Item>User ID: {cart.userId}</ListGroup.Item>
              <ListGroup.Item>Date: {cart.date}</ListGroup.Item>
              <ListGroup.Item>
                Products:
                <ListGroup variant="flush">
                  {cart.products.map((product) => (
                    <ListGroup.Item key={product.productId}>
                      Product # {product.productId}, Quantity:{" "}
                      {product.quantity},
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
