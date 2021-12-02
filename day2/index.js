const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
const inputArray = data
  .toString()
  .split("\n")
  .map((instruction) => {
    const split = instruction.split(" ");
    return {
      direction: split[0],
      value: parseInt(split[1]),
    };
  });

let horizontalTotal = 0;
let depthTotal = 0;
inputArray.forEach((instruction) => {
  const { direction, value } = instruction;

  if (direction === "forward") {
    horizontalTotal += value;
  }
  if (direction === "up") {
    depthTotal -= value;
  }
  if (direction === "down") {
    depthTotal += value;
  }
});

console.log({
  count: inputArray.length,
  horizontalTotal,
  depthTotal,
  finalPosition: horizontalTotal * depthTotal,
});
