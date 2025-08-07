Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Bind must be called on a function')
  }

  const self = this
  return function fn(...callArgs) {
    if (this instanceof fn) {
      return new self(...args, ...callArgs)
    }
    return self.apply(context, [...args, ...callArgs])
  }
}