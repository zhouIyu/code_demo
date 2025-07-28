/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === undefined || obj === null || classFunction === null || classFunction === undefined) {
    return false
  }
  while (Object.getPrototypeOf(obj)) {
    if (Object.getPrototypeOf(obj) === classFunction.prototype) {
      return true
    } else {
      obj = Object.getPrototypeOf(obj)
    }
  }

  return false
};

// 测试用例
console.log(checkIfInstanceOf(new Date(), Date))