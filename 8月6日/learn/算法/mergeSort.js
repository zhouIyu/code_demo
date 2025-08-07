// 归并排序

function mergeSort(arr) {
  const length = arr.length
  if (length < 2) return arr
  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length > 0) {
    result.push(left.shift())
  }

  while (right.length > 0) {
    result.push(right.shift())
  }

  return result
}

//测试 二十个数字
const arr = [5, 3, 8, 4, 2, 7, 6, 1, 9, 0, 12, 11, 10, 15, 14, 13, 18, 17, 16, 19]
console.time('mergeSort')
console.log(mergeSort(arr)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
console.timeEnd('mergeSort')