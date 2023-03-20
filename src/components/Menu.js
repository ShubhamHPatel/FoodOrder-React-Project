import React from "react";

import styles from "../scss/menu.module.scss";
import Button from "./Button";
import Card from "./Card";

const Menu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.menuSelect}>
        <h2 className={styles.menuHeading}>Menu</h2>
        <div className={styles.menuSelectItem}>
          <Button value="Pizzas" />
          <Button value="Pastas" />
          <Button value="Drinks" />
        </div>
      </div>
      <div className={styles.menuItems} >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Menu;
