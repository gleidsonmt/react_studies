import React from "react";
import GoogleIcon from "../icons/GoogleIcon";
import styles from "./Button.module.css";

const Button = (cancel = false) => {
  let _default =
    "flex w-full gap-x-1 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ";
  let _cancel = "";

  return (
    // <button className={cancel ? _cancel : _default}>
    <button className="flex w-full gap-x-1 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
      <GoogleIcon />
      Button
    </button>
  );
};

export default Button;
