import React from "react";
import styles from "./GoogleIcon.module.css";

const GoogleIcon = ({
  name = "favorite",
  type = "",
  animation = false,
  transition = false,
}) => {
  return (
    <span
      className={
        "material-symbols-outlined " +
        (type != "outlined" ? styles.googleIcon : styles.googleIconOutlined) +
        " " +
        (animation && styles.googleIconAnimation) +
        " " +
        (transition && styles.googleIconTransition)
      }
    >
      {name}
    </span>
  );
};

export default GoogleIcon;
