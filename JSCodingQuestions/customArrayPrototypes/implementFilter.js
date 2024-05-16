Array.prototype.filterFromScratch = function (callback) {
  // Your implementation here
  let result = [];
  for (let i = 0; i < this.length; i++) {
    // if(){}
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.filterFromScratch((element) => element > 3);
console.log(result); // [4, 5]
