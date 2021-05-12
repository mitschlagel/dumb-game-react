import { randomInt, randomColor } from "./Random";
import React, { useState } from "react";

const Cell = () => {
  const num = randomInt();
  const [color, setColor] = useState("#e6e6e6");
  return (
    <div
      className="cell"
      style={{ backgroundColor: color }}
      onClick={() => setColor(randomColor())}
    >
      <h1>{num}</h1>
    </div>
  );
};

export default Cell;
