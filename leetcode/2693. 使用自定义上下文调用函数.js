/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  if (context === undefined) {
    return undefined
  }
  const key = Symbol()
  context[key] = this

  const result = context[key](...args)

  delete context[key]
  return result
}

function increment() {
  this.count++;
  return this.count;
}

console.log(increment.callPolyfill({count:2}))
