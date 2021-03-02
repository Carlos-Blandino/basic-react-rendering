import React from "react";

function BillBoard({ props }) {
  const [name, birthDay, imageSrc] = props;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "inline" }}>
        <img
          style={{ marginRight: "15px" }}
          src={imageSrc}
          width="400px"
          alt="kitten"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>Birthday: {birthDay}</h2>
      </div>
    </div>
  );
}

export default BillBoard;
