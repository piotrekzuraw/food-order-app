import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const inCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const inCartItem = state.items[inCartItemIndex];

    let updatedItems;

    if (inCartItem) {
      const updatedItem = {
        ...inCartItem,
        amount: inCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[inCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const inCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const inCartItem = state.items[inCartItemIndex];
    let newTotalAmount = state.totalAmount - inCartItem.price;
    if (newTotalAmount < 0) newTotalAmount = 0;
    let updatedItems;
    if (inCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...inCartItem,
        amount: inCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[inCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const handleAddingItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const handleRemovingItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };
  const handleClearCart = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddingItemToCart,
    removeItem: handleRemovingItemFromCart,
    clearCart: handleClearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
