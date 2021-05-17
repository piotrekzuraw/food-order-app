import { useContext } from "react";
import CartIcon from "../UI/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "../../styles/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.items}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
