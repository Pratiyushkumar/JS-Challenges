Array.prototype.mapFromScratch = function (callback) {
  // Your implementation here
  const resultant = [];
  for (let i = 0; i < this.length; i++) {
    resultant.push(callback(this[i]));
  }
  return resultant;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.mapFromScratch((element) => element * 2);
console.log(result); // [2, 4, 6, 8, 10]
