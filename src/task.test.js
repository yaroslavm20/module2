const increaseByTen = require('./task');

const input = [1, 2, 3, 4, 5];
const output = [11, 12, 13, 14, 15];

test('increasing each number by ten', () => {
    expect(increaseByTen(input)).toEqual(output);
});