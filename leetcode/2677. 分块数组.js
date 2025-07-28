/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length <= 0) {
    return arr
  }
  const length = arr.length
  const res = []
  let i = 0
  while (i < arr.length) {
    const cur = arr.slice(i, i + size)
    res.push(cur)
    i += size
  }
  return res
};
const arr = [1,2,3,4,5], size = 6
console.log(chunk(arr, size))