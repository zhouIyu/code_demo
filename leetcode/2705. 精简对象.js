/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (typeof obj === "string" || typeof obj === "boolean" || typeof obj === "number") return obj
  const isArray = Array.isArray(obj)
  let result = isArray ? [] : {}
  for (const key in obj) {
    const item = obj[key]
    if (!!item) {
      if (isArray) {
        result.push(compactObject(item))
      } else {
        result[key] = compactObject(item)
      }
    }
  }
  return result
};

const obj = [null, 0, false, 1]

console.log(compactObject(obj))

const obj2 = { "a": null, "b": [false, 1] }
console.log(compactObject(obj2))