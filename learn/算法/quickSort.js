// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr
  _quickSort(arr, 0, arr.length - 1)
  return arr
}

function _quickSort(arr, left, right) { }

//测试 二十个数字
const arr = [5, 3, 8, 4, 2, 7, 6, 1, 9, 0, 12, 11, 10, 15, 14, 13, 18, 17, 16, 19]
console.time('quickSort')
console.log(quickSort(arr)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
console.timeEnd('quickSort')