function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (hash.has(obj)) return hash.get(obj)

  const clone = Array.isArray(obj) ? [] : {}
  hash.set(obj, clone)
  Reflect.ownKeys(obj).forEach(key => {
    clone[key] = deepClone(obj[key], hash)
  })
  return clone
}