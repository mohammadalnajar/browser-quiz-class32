'use strict';

const makeRandom = (item) => {
  if (Array.isArray(item)) {
    //   method 1
    // item.sort(() => Math.random() - 0.5);
    // return item;

    // method 2 https://javascript.info/array-methods#shuffle-an-array
    for (let i = item.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [item[i], item[j]] = [item[j], item[i]];
    }
    console.log(item);
  } else if (!Array.isArray(item)) {
    item = Object.entries(item)
      .sort(() => Math.random() - 0.5)
      .reduce((obj, [k, v]) => {
        obj[k] = v;
        return obj;
      }, {});
    return item;
  }
};

export default makeRandom;
