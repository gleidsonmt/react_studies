import React from "react";
import styles from "./Container.module.css";

const Container = (props) => {
  console.log("wht", styles[props.customClass]);

  return (
    <div className={`${styles.container}  ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
};

export default Container;
