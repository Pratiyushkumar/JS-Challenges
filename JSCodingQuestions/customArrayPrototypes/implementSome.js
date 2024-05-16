Array.prototype.someFromScratch = function (callback) {
  // Your implementation here
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5];
const result = arr.someFromScratch((element) => element > 3);
console.log(result); // true
