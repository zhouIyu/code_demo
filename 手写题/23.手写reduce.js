Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const arr = this;
  const length = arr.length;
  let startIndex = 0
  if (arguments.length < 2) {
    initialValue = arr[startIndex]
    startIndex++
  }

  for (let i = startIndex; i < length; i++) {
    initialValue = callback(initialValue, arr[i], i, arr)
  }
  return initialValue
}

// 测试
const arr = [1, 2, 3, 4, 5]
const result = arr.myReduce(function (acc, item) {
  return acc + item
})
console.log(result) // 15