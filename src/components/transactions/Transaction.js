import React from "react";

const Transacction = ({ title, Type }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Type></Type>
      <input value="date here" />
      <input value="144.40" />
      <button>Save</button>
    </div>
  );
};

export default Transacction;
