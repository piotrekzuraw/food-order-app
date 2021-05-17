import headerImg from "../../images/header-img.jpg";
import classes from "../../styles/Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food App</h1>
        <button>Cart</button>
      </header>
      <div className={classes["header-img"]}>
        <img src={headerImg} alt="Food" />
      </div>
    </>
  );
};

export default Header;
