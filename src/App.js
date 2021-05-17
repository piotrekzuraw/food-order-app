import "./App.css";
import Cart from "./components/Layout/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Layout/Meals";

const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
