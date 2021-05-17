import headerImg from "../../images/header-img.jpg";
import classes from "../../styles/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["header-img"]}>
        <img src={headerImg} alt="Food" />
      </div>
    </>
  );
};

export default Header;
