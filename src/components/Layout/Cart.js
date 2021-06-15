import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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
  const handleOrder = () => {
    setIsCheckout(true);
  };

  const handleOrderSubmit = async (userData) => {
    setSubmit(true);
    await fetch(
      "https://food-order-app-74811-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    );
    setSubmit(false);
    setDidSubmit(true);
    cartContext.clearCart();
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
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={handleOrder}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={handleOrderSubmit} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );
  const submitModalContent = <p>Sending your order...</p>;
  const didSubmitModalContent = (
    <>
      <p>We have your order, get ready for delicious meal!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!submit && !didSubmit && cartModalContent}
      {submit && submitModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
