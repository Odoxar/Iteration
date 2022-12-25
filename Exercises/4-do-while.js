'use strict';

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6
const sum = (...args) => {
  const len = args.length;
  let acc = 0;
  if (len === 0) return acc;
  let i = 0;
  do { acc += args[i++]; } while (i < len);
  return acc;
};

module.exports = { sum };
