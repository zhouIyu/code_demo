var once = function (fn) {
  let isCall = false
  return function (...args) {
    if (isCall) {
      return undefined
    }
    isCall = true
    return fn.apply(this, args)
  }
}