import { randomInt, randomColor } from "./Random";

const Cell = () => {
  const num = randomInt();
  const color = randomColor();

  return (
    <div className="cell">
      <h1>{num}</h1>
    </div>
  );
};

export default Cell;
