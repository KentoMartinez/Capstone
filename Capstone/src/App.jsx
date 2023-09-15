import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/home/products";
import ViewProducts from "./components/home/viewproduct";
import ViewProfile from "./components/user/profile";
import LogIn from "./components/index/login";
import Jewelery from "./components/categories/jewelery";
import Electronics from "./components/categories/electronics";
import Mens from "./components/categories/mensclothing";
import Womens from "./components/categories/womensclothing";
import Cart from "./components/user/cart";
import Profile from "./components/user/profile";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import Navbars from "./components/navbars/navbar";

function App() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  function showMessage(msg, typ) {

    setType(typ);
    setMessage(msg);
    setShow(true);
  }
  return (
    <>
    <div className="bg">
      <Navbars />
      <Routes>
        <Route path="/" element={<LogIn showMessage={showMessage} />} />
        <Route path="/products" element={<Products showMessage={showMessage}/>} />
        <Route path="/products/:id" element={<ViewProducts showMessage={showMessage} />} />
        <Route path="/profile" element={<ViewProfile showMessage={showMessage}/>} />
        <Route path="/products/category/jewerely" element={<Jewelery showMessage={showMessage}/>} />
        <Route
          path="/products/category/electronics"
          element={<Electronics showMessage={showMessage}/>}
        />
        <Route path="/products/category/men's clothing" element={<Mens showMessage={showMessage}/>} />
        <Route
          path="/products/category/women's clothing"
          element={<Womens showMessage={showMessage}/>}
        />
           <Route path="/cart" element={<Cart showMessage={showMessage}/>} />
           <Route path="/user" element={<Profile showMessage={showMessage}/>} />
      </Routes>
   
      </div>
      <ToastContainer
        position="bottom-center"
        className="p-3"
        style={{ zIndex: 1 }}
        
      >
        <Toast show={show} bg={type.toLowerCase()} onClose={toggleShow} delay={5000} autohide>
          <Toast.Header>
            <strong className="me-auto">{type==="danger"?"Error":type==="Warning"?"Succes":type}</strong>
            
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;
