Function.prototype.myBind = function (context, ...args) {
  const self = this
  return function fn(...callArgs) {
    if (this instanceof fn) {
      return new self(...args, ...callArgs)
    } else {
      return self.apply(context, [...args, ...callArgs])
    }
  }
}

// 测试
const obj = {
  value: 42
}

function getValue(a) {
  return this.value + a
}

const boundGetValue = getValue.myBind(obj)
console.log(boundGetValue(1)) // 43
