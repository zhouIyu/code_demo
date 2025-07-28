var flat = function (arr, n) {
  if (n === 0) {
    return arr
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flat(arr[i], n - 1))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat(arr, 2))