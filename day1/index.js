const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readFile = () => {
  const data = fs.readFileSync("input.txt", "utf8");
  return data
    .toString()
    .split("\n")
    .map((numberAsString) => parseInt(numberAsString));
};

const part1 = () => {
  const inputArray = readFile();

  let increasedCount = 0;
  let decreasedCount = 0;
  inputArray.forEach((depthMeasurement, index) => {
    // ignore first
    if (index === 0) {
      return;
    }

    let lastNumber = inputArray[index - 1];
    if (depthMeasurement > lastNumber) {
      increasedCount++;
    }

    if (depthMeasurement < lastNumber) {
      decreasedCount++;
    }
  });

  console.log({
    inputCount: inputArray.length,
    increasedCount,
    decreasedCount,
  });
};

const getValue = (array, index) => {
  if (array[index] === undefined) return 0;

  return array[index];
};

const part2 = () => {
  const inputArray = readFile();

  const adjustedInput = [];
  inputArray.forEach((depthMeasurement, index) => {
    adjustedInput.push({
      identifier: uuidv4(),
      values: [
        getValue(inputArray, index),
        getValue(inputArray, index + 1),
        getValue(inputArray, index + 2),
      ],
      sum:
        getValue(inputArray, index) +
        getValue(inputArray, index + 1) +
        getValue(inputArray, index + 2),
    });
  });

  let increasedCount = 0;
  let decreasedCount = 0;
  adjustedInput.forEach((currentIteration, index) => {
    // ignore first
    if (index === 0) {
      return;
    }

    let lastIteration = adjustedInput[index - 1];
    if (currentIteration.sum > lastIteration.sum) {
      increasedCount++;
    }

    if (currentIteration.sum < lastIteration.sum) {
      decreasedCount++;
    }
  });

  console.log({
    inputCount: inputArray.length,
    increasedCount,
    decreasedCount,
  });
};

// part1();
// part2();
