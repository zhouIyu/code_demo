Function.prototype.myCall = function (context, ...args) {
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

function add() {
  return this.a + this.b
}

const obj = {
  a: 1,
  b: 2
}

const r = add.myCall(obj)
console.log(r)