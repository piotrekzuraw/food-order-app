import { useContext, useState, useEffect } from "react";
import CartIcon from "../UI/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "../../styles/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [buttonActive, setButtonActive] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${buttonActive ? classes.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonActive(true);

    const timer = setTimeout(() => {
      setButtonActive(false);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.items}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
