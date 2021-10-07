import React from "react";
import CartIcon from "./../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.label}>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;