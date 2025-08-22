function createObject(proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('proto 参数错误')
  }
  function F() { }
  F.prototype = proto
  const obj = new F()
  if (propertiesObject) {
    Object.defineProperties(obj, propertiesObject)
  }
  return obj
}