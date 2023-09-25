import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { BsBagDash, BsBagPlus, BsBagX, BsBagCheck } from "react-icons/bs";

function Cart() {
  const [cart, setCart] = useState([]);
  const username = localStorage.getItem("username");
  const mainUserId = parseInt(localStorage.getItem("userId"), 10);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts?sort=desc")
      .then((res) => res.json())
      .then((data) => {
        const cartUser = data.find((cart) => cart.userId === mainUserId);
        console.log(cartUser);

        if (cartUser) {
          setCart(cartUser.products);
        } else {
          setCart([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    const currentProduct = currentCart.find(
      (item) => item.productId === product.id
    );

    if (currentProduct) {
      currentProduct.quantity += 1;
    } else {
      currentProduct.push({
        productId: product.id,
        quantity: 1,
        image: product,
      });
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));

    setCart(currentCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId) {
        item.quantity += 1;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const checkout = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          {cart.map((item) => (
            <div key={item.productId}>
              <br />
              <Card.Img src={item.image} alt={`Product ${item.productId}`} />
              <Card.Text> {item.title}</Card.Text>
              <Button
                variant="dark"
                onClick={() => increaseQuantity(item.productId)}
              >
                <BsBagPlus />
              </Button>
              {item.quantity}
              <Button
                variant="dark"
                onClick={() => decreaseQuantity(item.productId)}
              >
                <BsBagDash />
              </Button>
              <Button
                variant="dark"
                onClick={() => removeFromCart(item.productId)}
              >
                <BsBagX />{" "}
              </Button>
            </div>
          ))}
        </Card.Body>
      </Card>
      <Card>
        <Card.Title
          style={{
            top: 0,
            left: 5,
          }}
        >
          Checkout
        </Card.Title>
        <Button variant="dark" onClick={checkout}>
          <BsBagCheck />{" "}
        </Button>
      </Card>
    </>
  );
}

export default Cart;
