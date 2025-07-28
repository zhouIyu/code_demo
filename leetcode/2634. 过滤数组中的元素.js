/**
 * 
 * @param {number[]} arr 
 * @param {function} fn 
 */
function filter(arr, fn) {
  let res = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const curr = fn(arr[i], i)
    if (curr) { 
      res.push(arr[i])
    }
  }
  return res
}

const arr = [0, 10, 20, 30]

const fn = (x) => x > 10
console.log(filter(arr, fn))