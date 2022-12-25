'use strict';

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

const max = (matrix) => {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      res = res > item ? res : item;
    }
  }
  return res;
};

module.exports = { max };
