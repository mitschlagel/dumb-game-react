import { randomInt } from "./Random";

const Title = () => {
  return (
    <header>
      <h1>{randomInt()}</h1>
      <h2>a dumb game</h2>
    </header>
  );
};

export default Title;
