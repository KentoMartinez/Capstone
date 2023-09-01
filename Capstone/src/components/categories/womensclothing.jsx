import { useEffect, useState } from "react";

export default function Womens() {
  const [womenclothing, setWomenclothing] = useState();

  useEffect(() => {
    function fetchWomens() {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
    fetchWomens();
  }, []);
  return (
    <>
      <h1>I'm Women's Clothing</h1>
    </>
  );
}
