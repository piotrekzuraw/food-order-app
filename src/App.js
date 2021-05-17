import "./App.css";
import React, { useState } from "react";
import Cart from "./components/Layout/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Layout/Meals";

const App = () => {
  const [cartVisibility, setCartVisibility] = useState(false);

  const handleCartShow = () => {
    setCartVisibility(true);
  };
  const handleCartHide = () => {
    setCartVisibility(false);
  };

  return (
    <>
      {cartVisibility && <Cart onClose={handleCartHide} />}
      <Header onShowCart={handleCartShow} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
