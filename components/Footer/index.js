import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.instagram.com/farukmars_/" target="_blank">
        Faruk Kahya
      </Link>
    </footer>
  );
}

export default Footer