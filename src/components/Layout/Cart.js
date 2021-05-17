import classes from "../../styles/Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "m1", name: "Sushi", amount: 2, price: 39.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>39.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
