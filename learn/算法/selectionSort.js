// 选择排序
function selectionSort(arr) {
  if (arr.length <= 1) return arr
  const length = arr.length
  let temp;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) { 
        minIndex = j
      }
    }
    // 交换
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 测试
const arr = [5, 3, 8, 4, 2, 7, 6, 1, 9, 0, 12, 11, 10, 15, 14, 13, 18, 17, 16, 19]
console.time('selectionSort')
console.log(selectionSort(arr)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
console.timeEnd('selectionSort')

