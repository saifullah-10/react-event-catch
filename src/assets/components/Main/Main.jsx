import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./main.css";
const Main = () => {
  const [bottles, setBottles] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  function handleCart({ bottle, e }) {
    const { name, price } = bottle;
    const data = { name: name, price: price };
    e.target.disabled = "true";
    console.log(e.target.parentNode);
  }

  return (
    <>
      <h2>Bottles Available: {bottles.length - items.length}</h2>
      <div className="bottle_layout">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleCart={handleCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};
export default Main;
