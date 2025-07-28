function compose(fns) {
  return function (x) { 
    return fns.reduceRight((res, fn) => {
      return fn(res)
    }, x)
  }
}

const fns = [x => x + 1, x => x * x, x => 2 * x]
console.log(compose(fns)(4))