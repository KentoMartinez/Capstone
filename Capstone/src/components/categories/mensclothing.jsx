import { useEffect, useState } from "react";

export default function Mens() {
  const [menclothing, setMenclothing] = useState();

  useEffect(() => {
    function fetchMens() {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
    fetchMens();
  }, []);
  return (
    <>
      <h1>I'm Men's Clothing</h1>
    </>
  );
}
