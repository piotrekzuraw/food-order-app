import React from "react";
import classes from "../../styles/Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
      {/* Uzycie ... sprawi, że wszystkie propsy jaki zostaną przypisane komponentowi Input zostaną przypisane elementowi input powyżej */}
    </div>
  );
});

export default Input;
