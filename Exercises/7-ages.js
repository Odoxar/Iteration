'use strict';

// Use for..in to calculate age for each person

const ages = (persons) => {
  const res = {};
  for (const person in persons) {
    const { born, died } = persons[person];
    const age = died - born;
    res[person] = age;
  }
  return res;
};

module.exports = { ages };
