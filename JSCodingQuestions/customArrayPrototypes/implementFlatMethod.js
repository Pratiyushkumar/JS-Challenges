/**
 * There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.
 * Could you manage to implement your own one?
 */

/**
 * arr = [1, 2, [3, 4, [5, 6]]];
 * flat(arr,1)
 *
 *
 * const arr = [1, [2], [3, [4]]];
 * flat(arr)|| flat(arr, 1) => [1, 2, 3, [4]]
 * flat(arr, 2)  => [1, 2, 3, 4]
 */

let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flat(arr, depth = 1) {
  if (!Array.isArray(arr) || !arr.length) return arr;

  return arr.reduce((acc, item) => {
    if (Array.isArray(item) && depth) {
      acc.push(...flat(item, depth - 1));
    } else acc.push(item);

    return acc;
  }, []);
}

console.log(flat([1, [2], [3, [4]]], 1));
