import { useContext } from "react";
import classes from "../../styles/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const price = `PLN ${props.price.toFixed(2)}`;

  const handleAddToCart = (enteredAmountNumber) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
