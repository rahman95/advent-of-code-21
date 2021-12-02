const fs = require("fs");

// Example
// const inputArray = [
//   199, // (N/A - no previous measurement)
//   200, // (increased)
//   208, // (increased)
//   210, // (increased)
//   200, // (decreased)
//   207, // (increased)
//   240, // (increased)
//   269, // (increased)
//   260, // (decreased)
//   263, // (increased)
// ];

const data = fs.readFileSync("input.txt", "utf8");
const inputArray = data
  .toString()
  .split("\n")
  .map((numberAsString) => parseInt(numberAsString));

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

console.log({ inputCount: inputArray.length, increasedCount, decreasedCount });
