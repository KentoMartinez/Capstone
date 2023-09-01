import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/home/products";
import ViewProducts from "./components/home/viewproduct";
import NavbarPro from "./components/index/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/index/login";
import Jewelery from "./components/categories/jewelery";
import Electronics from "./components/categories/electronics";
import Mens from "./components/categories/mensclothing";
import Womens from "./components/categories/womensclothing";

function App() {
  return (
    <>
      <NavbarPro />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ViewProducts />} />
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
      </Routes>
    </>
  );
}

export default App;
