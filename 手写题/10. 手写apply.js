Function.prototype.myApply = function (context, params) {
  let result
  const key = Symbol()
  context[key] = this
  if (!params) {
    result = context[key]()
  } else {
    if (!Array.isArray(params)) {
      throw new TypeError('params 必须是数组')
    }
    result = context[key](...params)
  }

  delete context[key]
  return result
}

// 编写测试，对比apply的结果
function testMyApply() {
  const obj = {
    value: 42
  }

  function getValue(a) {
    return this.value + a
  }

  const result2 = getValue.myApply(obj, [1, 2])
  const result1 = getValue.apply(obj, [1, 2])


  console.log(result1) // 42
  console.log(result2) // 42
}

testMyApply()