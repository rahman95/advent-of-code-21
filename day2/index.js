const fs = require("fs");

const readFile = () => {
  const data = fs.readFileSync("input.txt", "utf8");
  return data
    .toString()
    .split("\n")
    .map((instruction) => {
      const split = instruction.split(" ");
      return {
        direction: split[0],
        value: parseInt(split[1]),
      };
    });
};

const part1 = () => {
  const inputArray = readFile();

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
};

const part2 = () => {
  const inputArray = readFile();

  let aimTotal = 0;
  let horizontalTotal = 0;
  let depthTotal = 0;
  inputArray.forEach((instruction) => {
    const { direction, value } = instruction;

    if (direction === "forward") {
      horizontalTotal += value;
      depthTotal += aimTotal * value;
    }
    if (direction === "up") {
      aimTotal -= value;
    }
    if (direction === "down") {
      aimTotal += value;
    }
  });

  console.log({
    count: inputArray.length,
    horizontalTotal,
    depthTotal,
    aimTotal,
    finalPosition: horizontalTotal * depthTotal,
  });
};

// part1();
// part2();
