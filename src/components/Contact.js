import React, { useState } from "react";

import styles from "../scss/contact.module.scss";
import Button from "./Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className={styles.contact}>
      <div className={styles.contactHead}>
        <h2 className={styles.contactHeading}>Contact Us</h2>
        <p className={styles.contactSubHeading}>
          Provide us your valuable feedback
        </p>
      </div>
      <form className={styles.contactForm}>
        <div className={styles.inputFields}>
          <input
            className={styles.inputEmail}
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={styles.inputMessage}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button value="Send" />
      </form>
    </section>
  );
};

export default Contact;
