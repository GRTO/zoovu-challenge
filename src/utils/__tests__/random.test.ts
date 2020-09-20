import { shuffle } from 'utils/random';

describe('Testing random utils file', () => {
  it('The expected array got elements in different position as before', () => {
    const array = [0, 1, 2, 3, 4, 5];
    const arrayShuffle = shuffle(array);

    const isTwoArraySame = arrayShuffle.reduce((prev, value, index) => prev && value === array[index], true);

    expect(isTwoArraySame).toBeFalsy();
  });
});
