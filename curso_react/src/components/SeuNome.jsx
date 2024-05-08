import React from "react";

const SeuNome = ({ setNome }) => {
  return (
    <div>
      <p>Digite seu nome:</p>
      <input
        type="text"
        placeholder="Qual eh seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
};

export default SeuNome;
