Function.prototype.myApply = function (context, args) {
  const key = Symbol()
  let result
  if (Array.isArray(args)) {
    result = context[key](...args)
  } else {
    result = context[key]()
  }
  delete context[key]
  return result
}

const obj = {
  a: 1,
  b: 2
}

function add() {
  return this.a + this.b
}

const r = add.myApply(obj)
console.log(r)