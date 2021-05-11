/**
 * Generates random number between 1 and 28.
 * Default parameters for purpose of dumb game, but can
 * be used to generate random ints within any range.
 */
export const randomInt = (min = 1, max = 9) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generates random color in hex notation.
 */
export const randomColor = () => {
  let result = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return result;
};
