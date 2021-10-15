import {rollDice} from './rollDice';

it('rollDice generates random numbers from 1 to 6', () => {
    const result = rollDice();
    expect(result[0] >= 1 && result[0] <= 6).toEqual(true);
  });