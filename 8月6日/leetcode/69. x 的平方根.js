/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x
  let result
  let left = 1;
  let right = x
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const cur = mid * mid
    if (cur === x) {
      return mid
    } else if (cur < x) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
};

console.log(mySqrt(4))