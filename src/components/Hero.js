import React from "react";

import styles from "../scss/hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroDetails}>
        <h1 className={styles.heroHeading}>PIZZA</h1>
        <p className={styles.heroTag}>From The Garden, To the Oven</p>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet consectetur adipisi elit. Sequi minus
          commodi illo inventore ipsa fugit?
        </p>
        <Button value="ORDER" />
      </div>
      <div className={styles.heroImg}></div>
    </section>
  );
};

export default Hero;
