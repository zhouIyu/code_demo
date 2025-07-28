Array.prototype.groupBy = function (fn) {
  const resMap = new Map()
  const length = this.length
  for (let i = 0; i < length; i++) {
    const curr = fn(this[i])
    if (resMap.has(curr)) {
      const arr = resMap.get(curr)
      arr.push(this[i])
      resMap.set(curr, arr)
    } else {
      const arr = [this[i]]
      resMap.set(curr, arr)
    }
  }
  return Object.fromEntries(resMap.entries())
}

const array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
] 
const fn = function (item) { 
  return item.id; 
}

console.log(array.groupBy(fn))