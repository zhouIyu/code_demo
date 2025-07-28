Array.prototype.snail = function (rowCount, colCount) {
  if (rowCount * colCount !== this.length) {
    return []
  }
  let i = 0;
  let arr = []
  for (let i = 0; i < rowCount; i++) {
    arr[i] = []
    for (let j = 0; j < colCount; j++) {
      const base = j % 2 === 0 ? i : rowCount - i - 1
      arr[i][j] = this[j * rowCount + base]
    }
  }
  return arr
}

const list = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]

console.log(list.snail(5, 4))