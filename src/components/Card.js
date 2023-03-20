import React from "react";

import styles from "../scss/card.module.scss";
import Button from "./Button";

const Card = () => {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount);
  }

  return (
    <div className={styles.ItemCard}>
      <h3 className={styles.ItemName}>Cheeze Pizza</h3>
      <p className={styles.ItemDescription}>
        Lorem ipsum dolor sit amet consectetur ipsa fugit?
      </p>

      <div className={styles.ItemBuy}>
        <div className={styles.ItemQuantity}>
          <button onClick={subtract} class={styles.QuantitySubtract}>
            -
          </button>
          <p className={styles.QuantityNumber}>{count}</p>
          <button onClick={add} className={styles.QuantityAdd}>
            +
          </button>
        </div>
        <Button value="Buy" />
      </div>
    </div>
  );
};

export default Card;