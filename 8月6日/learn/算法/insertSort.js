// 插入排序

function insertSort(arr) {
  if (arr.length <= 1) return arr;
  const length = arr.length
  let preIndex, current
  for (let i = 1; i < length; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--;
    }
    arr[preIndex + 1] = current
  }
  return arr
}

//测试 二十个数字
const arr = [5, 3, 8, 4, 2, 7, 6, 1, 9, 0, 12, 11, 10, 15, 14, 13, 18, 17, 16, 19]
console.time('insertSort')
console.log(insertSort(arr)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
console.timeEnd('insertSort')