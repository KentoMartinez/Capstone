import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products";
import ViewProducts from "./components/viewproduct";
import CreateAccount from "./components/signin";
import NavbarPro from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <NavbarPro />
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ViewProducts />} />
      </Routes>
    </>
  );
}

export default App;
