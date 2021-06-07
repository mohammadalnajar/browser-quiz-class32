'use strict';

const makeRandom = (item) => {
  if (Array.isArray(item)) {
    item.sort(() => Math.random() - 0.5);
    return item;
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
