import React from "react";
import styles from "../project/ProjectCard.module.css";
import { BsFillTrashFill } from "react-icons/bs";

const ServiceCard = ({ id, name, cost, description, handleRemove }) => {
  function remove() {}
  return (
    <div className={styles.project_card}>
      <p>Hello</p>
      <h4>{name}</h4>
      <p>
        <span>Custo Total:</span>
      </p>

      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
