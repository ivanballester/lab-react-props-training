import React from "react";

function Random(props) {
  let randomValue = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );
  return (
    <div>
      <p style={{ border: "solid" }}>
        Random value between {props.min} and {props.max} : {randomValue}
      </p>
    </div>
  );
}

export default Random;
