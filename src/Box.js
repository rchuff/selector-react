import React from 'react';

//Individual squares in application.

const Box = ({complete, color, onSelect, selected}) => (
  <div
  style = {{
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    backgroundColor: `${complete || selected ? color : "gray"}`,
    display: "inline-block",
    margin: "20px"
  }}
  onClick={onSelect}
  >
  </div>
)

export default Box;
