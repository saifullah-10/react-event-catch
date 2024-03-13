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

    const dataArr = [...items, data];
    setItems(dataArr);
    console.log(items);
    // if (items.some((item) => item.name == data.name)) {
    //   alert("already add");
    // } else {
    //   setItems(dataArr);
    //   e.target.disabled = "true";
    // }
  }

  return (
    <>
      <h2>Bottles Available: {bottles.length - items.length}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item) => (
          <h2>{item.name}</h2>
        ))}
      </div>
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
