/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0
  let right = matrix.length - 1
  let cacheArr = []
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midRow = matrix[mid]
    const length = midRow.length
    if (midRow[0] <= target && target <= midRow[length - 1]) {
      cacheArr = midRow
      break
    } else if (target < midRow[0]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  if (cacheArr.length === 0) {
    return false
  }

  left = 0
  right = cacheArr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (cacheArr[mid] === target) {
      return true
    } else if (target < cacheArr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
};

var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let left = 0
  let right = m * n - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const row = Math.floor(mid / n)
    const col = mid % n
    const value = matrix[row][col]

    if (value === target) {
      return true
    } else if (value < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
console.log(searchMatrix(matrix, target))