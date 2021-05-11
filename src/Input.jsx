import React, { useState } from "react";
import GameData from "./GameData";

const Input = () => {
  const [guess, setGuess] = useState("");

  const handleGuess = (e) => {
    e.preventDefault();
    alert(`You guessed ${guess}`);
    GameData.currentGuess = guess;
    console.log(GameData.currentGuess);
  };
  return (
    <form onSubmit={handleGuess} className="guesser">
      <label for="guess">how many clicks?</label>
      <input
        value={guess}
        type="number"
        min="1"
        max="9"
        name="guess"
        id="guess"
        onChange={(e) => setGuess(e.target.value.replace(/d{1}/, ""))}
      />
      <input type="submit" value="Guess" />
    </form>
  );
};

export default Input;
