import "./bottle.css";
const Bottle = ({ bottle, handleCart }) => {
  const { img, name, price } = bottle;
  return (
    <>
      <div className="bottle">
        <h2>{name}</h2>
        <img src={img} alt="" />
        <p>Price: {price}$</p>
        <button onClick={(e) => handleCart({ bottle, e })}>
          Add to cart{name}
        </button>
      </div>
    </>
  );
};
export default Bottle;
