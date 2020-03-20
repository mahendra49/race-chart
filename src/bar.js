import React from "react";
import "./bar.css";

function Bar(props) {
  const barStyle = {
    width: props.barWidth * 4,
    "background-color": props.color
  };

  return (
    <div id={props.id} className="bar" style={barStyle}>
      <span className="bar-name">{props.name}</span>
      <span className="bar-value">{props.barWidth}</span>
    </div>
  );
}

export default Bar;
