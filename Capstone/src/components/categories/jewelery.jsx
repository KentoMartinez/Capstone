import { useEffect, useState } from "react";

export default function Jewelery() {
  const [jewelery, setJewerely] = useState();

  useEffect(() => {
    function fetchJewerely() {
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
    fetchJewerely();
  }, []);
  return (
    <>
      <h1>I'm Jewelery</h1>
    </>
  );
}
