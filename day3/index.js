const fs = require("fs");

const readFile = () => {
  const data = fs.readFileSync("input.txt", "utf8");
  return data.toString().split("\n");
};

const calculatePart1 = (array) => {
  let results = [];
  array.forEach((column, index) => {
    let count0 = 0;
    let count1 = 0;
    column.forEach((bit) => {
      if (parseInt(bit) === 0) {
        count0++;
      } else {
        count1++;
      }
    });

    results.push({
      columnIndex: index,
      mostCommon: count0 > count1 ? 0 : 1,
      leastCommon: count0 > count1 ? 1 : 0,
    });
  });

  let gammaRate = "";
  let epsilonRate = "";
  results.forEach((result) => {
    gammaRate += String(result.mostCommon);
    epsilonRate += String(result.leastCommon);
  });

  return {
    gammaRate: {
      binary: gammaRate,
      decimal: parseInt(gammaRate, 2),
    },
    epsilonRate: {
      binary: epsilonRate,
      decimal: parseInt(epsilonRate, 2),
    },
    powerConsumption: parseInt(gammaRate, 2) * parseInt(epsilonRate, 2),
  };
};

const part1 = () => {
  const inputArray = readFile();

  const formatted = [];
  inputArray.forEach((bits) => {
    const split = bits.split("");
    split.forEach((bit, index) => {
      if (Array.isArray(formatted[index])) {
        formatted[index].push(bit);
      } else {
        formatted[index] = [];
        formatted[index].push(bit);
      }
    });
  });

  console.log(calculatePart1(formatted));
};

part1();
