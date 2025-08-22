function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Set) return new Set([...obj]);
  if (obj instanceof Map) return new Map([...obj.entries()]);
  if (obj instanceof Error) return new obj.constructor(obj.message);

  if (hash.has(obj)) return hash.get(obj)
  const cloneObj = Array.isArray(obj) ? [] : {}
  hash.set(obj, cloneObj)
  Reflect.ownKeys(obj).forEach(key => {
    cloneObj[key] = deepClone(obj[key], hash)
  })
  return cloneObj
}