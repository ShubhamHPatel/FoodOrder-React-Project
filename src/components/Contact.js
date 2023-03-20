import React, { useState } from "react";

import styles from "../scss/contact.module.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className={styles.contact}>
      <form>
        <div className={styles.inputField}>
            <input
            placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <input type="submit" />
      </form>
    </section>
  );
};

export default Contact;
