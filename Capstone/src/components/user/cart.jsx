import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  BsBagDash,
  BsBagPlus,
  BsBagXFill,
  BsBagCheckFill,
} from "react-icons/bs";

function addToCart(product, setCart) {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  const currentProduct = currentCart.find(
    (item) => item.productId === product.id
  );

  if (currentProduct) {
    currentProduct.quantity += 1;
  } else {
    const newProduct = {
      productId: product.id,
      quantity: 1,
      image: product.image,
      price: product.price,
      title: product.title,
    };
    currentCart.push(newProduct);
  }

  localStorage.setItem("cart", JSON.stringify(currentCart));
  setCart(currentCart);
}

export { addToCart };

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId) {
        item.quantity += 1;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalAmount(updatedCart);
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
    updateTotalAmount(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalAmount(updatedCart);
  };

  const updateTotalAmount = (updatedCart) => {
    let total = 0;
    updatedCart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);
  };

  const checkout = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setTotalAmount(0);
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart localStorage:", cartData);
    setCart(cartData);
    updateTotalAmount(cartData);
  }, []);

  return (
    <>
      <Card.Body fluid="md">
        {cart.map((item) => (
          <div key={item.productId}>
            <br />
            <Card.Img
              style={{ width: "35%" }}
              src={item.image}
              alt={`Product ${item.productId}`}
            />

         

            
            <Card.Text>{item.title}</Card.Text>
            <b>${item.price}</b>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
              
                <Button
                  variant="dark"
                  onClick={() => increaseQuantity(item.productId)}
                >
                  <BsBagPlus />
                </Button>{" "}
                {item.quantity}{" "}
                <Button
                  variant="dark"
                  onClick={() => decreaseQuantity(item.productId)}
                >
                  <BsBagDash />
                </Button>
                <Button
              variant="danger"
              onClick={() => removeFromCart(item.productId)}
            >
              Remove
            </Button>
              </div>
            </div>
          </div>
        ))}
      </Card.Body>
      <br />
      <Offcanvas.Title>Summary</Offcanvas.Title>
      <br />
        <Card.Text>
          Total Amount <b>${totalAmount}</b>
        </Card.Text>
        <Button variant="success" onClick={checkout}>
          Check Out
        </Button>
    </>
  );
}

export { Cart };
