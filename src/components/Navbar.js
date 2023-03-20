import React from "react";

import styles from "../scss/navbar.module.scss";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className={styles.navigationBar}>
      <div className={styles.wrap}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>Pizza</div>
          <ul className={styles.navigationItems}>
            <li>
              <Button value="Home" variant="Secondary" />
            </li>
            <li>
              <Button value="Menu" variant="Secondary" />
            </li>
            <li>
              <Button value="Contact Us" variant="Secondary" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
