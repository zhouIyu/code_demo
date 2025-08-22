// 请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，这个方法将返回数组最后一个元素。
// 如果数组中没有元素，则返回 -1 。

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1
  }
  return this[this.length - 1]
}

const arr = [1, 2, 3]
console.log(arr.last())