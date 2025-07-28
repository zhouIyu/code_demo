/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
  let res = []
  const len = arr.length
  for (let i = 0; i < len; i++) { 
    const curr = fn(arr[i], i)
    res.push(curr)
  }
  return res
}

const arr = [1, 2, 3]

const fn = function plusone(n) { return n + 1; }

console.log(map(arr, fn))