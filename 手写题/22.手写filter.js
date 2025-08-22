Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} 不是函数`)
  }
  const arr = this
  const length = arr.length
  let result = []
  for (let i = 0; i < length; i++) {
    const cur = callback.call(thisArg, arr[i], i, arr)
    if (cur) {
      result.push(arr[i])
    }
  }
  return result
}

// 测试
const arr = [1, 2, 3, 4, 5]
const result = arr.myFilter(function (item) {
  return item % 2 === 0
})
console.log(result) // [2, 4]