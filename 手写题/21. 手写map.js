Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} 不是函数`)
  }
  const arr = this
  const length = arr.length
  const result = new Array(length)
  for (let i = 0; i < length; i++) {
    result[i] = callback.call(thisArg, arr[i], i, arr)
  }
  return result
}

// 测试
const arr = [1, 2, 3]
const result = arr.myMap(function (item) {
  return item * 2
})
console.log(result) // [2, 4, 6]