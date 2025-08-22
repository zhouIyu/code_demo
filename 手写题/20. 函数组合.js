function compose(...fns) {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fn[0]

  return function composed(...args) {
    return fns.reduceRight((prevRes, fn) => {
      return fn(prevRes)
    }, args[0])
  }
}


function pipe(...fns) {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fn[0]

  return function piped(...args) { 
    return fns.reduce((prevRes, fn) => {
      return fn(prevRes)
    }, args[0])
  }
}