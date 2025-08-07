// 冒泡算法

function bubbleSort(arr) {
  if (arr.length <= 1) return arr
  const length = arr.length
  for (let i = 0; i < length; i++) {
    let isSorted = false
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        isSorted = true
      }
    }

    if (!isSorted) {
      break
    }
  }
  return arr
}

// 测试
const arr = [5, 3, 8, 4, 2, 7, 6, 1, 9, 0, 12, 11, 10, 15, 14, 13, 18, 17, 16, 19]
console.time('bubbleSort')
console.log(bubbleSort(arr)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
console.timeEnd('bubbleSort')