import { useRef, useState } from "react";
import Input from "../UI/Input.js";
import classes from "../../styles/MealItemForm.module.css";

const MealItemForm = (props) => {
  const [enteredAmountIsValid, setEnteredAmountIsValid] = useState(true);
  const inputAmountRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAmount = inputAmountRef.current.value; //zawsze dostaniemy stringa!
    const enteredAmountNUmber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNUmber < 1 ||
      enteredAmountNUmber > 5
    ) {
      setEnteredAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNUmber);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!enteredAmountIsValid && <p>Please enter valid amount!</p>}
    </form>
  );
};

export default MealItemForm;
