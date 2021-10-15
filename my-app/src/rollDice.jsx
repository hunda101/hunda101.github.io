// function return random 2 numbers from 1 to 6

export const Dice = () => {
  function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function rollDice() {
    const num1 = randomnumber(1, 6);
    const num2 = randomnumber(1, 6);

    return [num1, num2];
  }


  return rollDice();
}
