import CartContext from "./cart-context";

const CartProvider = (props) => {
  const handleAddingItemToCart = (item) => {};
  const handleRemovingItemFromCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleAddingItemToCart,
    removeItem: handleRemovingItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
