// function flat(arr, n = Infinity) {
//   return arr.flat(n)
// }

function flat(arr, n) {
  if (n === 0) return arr
  const result = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i], n - 1))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

const arr = [1, [2, [3, [4, 5]]], 6]
console.log(flat(arr, 2))