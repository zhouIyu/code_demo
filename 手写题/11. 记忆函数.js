function memoize(fn) {
  const cache = new Map()
  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) { 
      return cache.get(key)
    } else {
      const result = fn(...args)
      cache.set(key, result)
      return result
    }
  }
}

// 编写测试

function add(a, b) {
  return a + b
}

const memoizedAdd = memoize(add)

console.log(memoizedAdd(1, 2)) // 3
console.log(memoizedAdd(1, 2)) // 3 (cached)
console.log(memoizedAdd(2, 3)) // 5
console.log(memoizedAdd(1, 2, 3)) // 6

function subtract(a, b) {
  return a - b
}

const memoizedSubtract = memoize(subtract)

console.log(memoizedSubtract(1, 2)) // -1
console.log(memoizedSubtract(1, 2)) // -1 (cached)
console.log(memoizedSubtract(5, 3)) // 2