// 快速排序
// 快速排序

function quickSort(arr) {
  // 为了不改变原数组，先复制一份
  const res = arr.slice()
  _quickSort(res, 0, res.length - 1)
  return res
}

function _quickSort(arr, left, right) {
  if (left >= right) return
  const pivot = arr[left]
  let i = left, j = right
  while (i < j) {
    while (i < j && arr[j] >= pivot) j--
    while (i < j && arr[i] <= pivot) i++
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[left], arr[i]] = [arr[i], arr[left]]
  _quickSort(arr, left, i - 1)
  _quickSort(arr, i + 1, right)
}

//测试 二十个数字
const arr = [5, 3, 8, 4, 2, 7, 6, 1, 9, 0, 12, 11, 10, 15, 14, 13, 18, 17, 16, 19]
console.time('quickSort')
console.log(quickSort(arr)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
