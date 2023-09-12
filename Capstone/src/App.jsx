import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/home/products";
import ViewProducts from "./components/home/viewproduct";
import NavbarPro from "./components/index/navbar";
import ViewProfile from "./components/user/profile";
import LogIn from "./components/index/login";
import Jewelery from "./components/categories/jewelery";
import Electronics from "./components/categories/electronics";
import Mens from "./components/categories/mensclothing";
import Womens from "./components/categories/womensclothing";
import Cart from "./components/user/cart";
import Profile from "./components/user/profile";

function App() {
  return (
    <>
    <div className="bg">
      <NavbarPro />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ViewProducts />} />
        <Route path="/profile" element={<ViewProfile />} />
        <Route path="/products/category/jewerely" element={<Jewelery />} />
        <Route
          path="/products/category/electronics"
          element={<Electronics />}
        />
        <Route path="/products/category/men's clothing" element={<Mens />} />
        <Route
          path="/products/category/women's clothing"
          element={<Womens />}
        />
           <Route path="/cart" element={<Cart />} />
           <Route path="/user" element={<Profile />} />
      </Routes>
   
      </div>
    </>
  );
}

export default App;
