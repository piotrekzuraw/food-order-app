import classes from "../../styles/MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <input type="text" />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
