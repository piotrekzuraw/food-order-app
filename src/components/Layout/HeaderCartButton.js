import CartIcon from "../UI/CartIcon";
import classes from "../../styles/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.items}>0</span>
    </button>
  );
};

export default HeaderCartButton;
