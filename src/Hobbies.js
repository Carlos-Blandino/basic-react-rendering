import React from "react";

function Hobbies({ props = [] }) {
  const listItems = props.map((hobby, index) => {
    return <li key={index}>{hobby}</li>;
  });
  return (
    props.length > 0 && (
      <div>
        <h3>Hobbies</h3>
        <ul>{listItems}</ul>
      </div>
    )
  );
}

export default Hobbies;
