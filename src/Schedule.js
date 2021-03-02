import React from "react";

function Schedule({ props = [] }) {
  const listItems = props.map((item, index) => {
    return (
      <li key={index} style={{ textAlign: "left" }}>
        <div
          style={{
            width: "200px",
            marginLeft: "-40px",
          }}
        >
          <div
            style={{
              display: "inline",
              textAlign: "right",
              width: "50%",
              float: "left",
              marginRight: "10px",
            }}
          >
            {item.time}
          </div>
          <div
            style={{
              display: "inline",
              textAlign: "left",
              width: "50%",
            }}
          >
            {item.description}
          </div>
        </div>
      </li>
    );
  });
  return (
    props.length > 0 && (
      <div>
        <ol
          style={{
            listStyleType: "none",
            border: "1px solid black",
            width: "200px",
            padding: "10px 0 10px 20px",
          }}
        >
          {listItems}
        </ol>
      </div>
    )
  );
}

export default Schedule;
