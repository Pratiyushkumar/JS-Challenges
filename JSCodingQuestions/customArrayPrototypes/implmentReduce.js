Array.prototype.reduceFromScratch = function (callback, initialValue) {
  // Your implementation here
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.reduceFromScratch((acc, current) => acc + current, 0);
console.log(result); // 15
