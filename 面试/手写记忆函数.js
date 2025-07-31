function memoize(fn) {
  const map = new Map()
  return function (...args) { 
    const key = JSON.stringify(args)
    if(map.has(key)){
      return map.get(key)
    }
    const result = fn(...args)
    map.set(key, result)
    return result
  }
}