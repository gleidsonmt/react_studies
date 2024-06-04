import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((el) => (
            <div key={el.id} className="item">
              <div
                onClick={() => handleSingleSelection(el.id)}
                key={el.id}
                className="title"
              >
                <h3 key={el.id}>{el.question}</h3>
                <span>+</span>
              </div>
              {selected === el.id ? (
                <div className="content">{el.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data Found!</div>
        )}
      </div>
    </div>
  );
}
