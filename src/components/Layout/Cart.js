import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `PLN ${Math.max(cartContext.totalAmount).toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const handleRemoveCartItem = (id) => {
    cartContext.removeItem(id);
  };

  const handleAddCartItem = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1,
    });
  };

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={handleRemoveCartItem.bind(null, item.id)}
          onAdd={handleAddCartItem.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
