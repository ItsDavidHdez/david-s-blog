import React from "react";
import styles from "../styles/Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
