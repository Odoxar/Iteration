'use strict';

// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6
const sum = (...args) => args.reduce((acc, val) => acc + val, 0);

module.exports = { sum };
