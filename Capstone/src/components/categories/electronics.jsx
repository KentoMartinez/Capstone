import { useEffect, useState } from "react";

export default function Electronics() {
  const [electronic, setElectronic] = useState();

  useEffect(() => {
    function fetchElectronics() {
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
    fetchElectronics();
  }, []);
  return (
    <>
      <h1>I'm Electronics</h1>
    </>
  );
}
