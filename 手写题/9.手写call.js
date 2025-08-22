Function.prototype.myCall = function (context, ...args) {
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

function add(c) {
  return this.a + this.b + c
}
const obj = {
  a: 1,
  b: 2
}

console.log(add.call(obj, 3))