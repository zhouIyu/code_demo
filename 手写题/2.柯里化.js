function createCurry(fn) {
  let args = []
  return function curried(...newArgs) {
    args.push(...newArgs)
    if (fn.length <= args.length) {
      const result = fn(...args)
      args = []
      return result
    } else {
      return curried
    }
  }
}

// 编写测试
function add(a, b, c) {
  return a + b + c
}

const curriedAdd = createCurry(add)

console.log(curriedAdd(1)(2)(3)) // 6
console.log(curriedAdd(1, 2)(3)) // 6
console.log(curriedAdd(1, 2, 3)) // 6
