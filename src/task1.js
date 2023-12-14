function increaseByTen(numbers) {
    return numbers.map((number) => number + 10);
}

const numbers = [1, 2, 3, 4, 5];

const increasedNumbers = increaseByTen(numbers);

console.log(increasedNumbers); // [11, 12, 13, 14, 15]