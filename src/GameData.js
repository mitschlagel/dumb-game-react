export const GameData = {
  currentGameScore: 0,
  currentGuess: 0,
  totalScore: 0,
  numGames: 0,
  gameHistory: [],
  updateGameData: function () {
    this.gameHistory.push(this.currentGameScore);
    this.totalScore += this.currentGameScore;
    this.numGames++;
  },
};

export default GameData;
// Each game should add a new key value pair
