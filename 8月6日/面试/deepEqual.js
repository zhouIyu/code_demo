function deepEqual(a, b, hash = new WeakMap()) {
  if (a === b) return true

  if (a == null || b == null) return a === b

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime()
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString()
  }

  if (hash.has(a) && hash.get(a) === b) return true

  hash.set(a, b)

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return a.every((item, i) => deepEqual(item, b[i], hash))
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Reflect.ownKeys(a)
    const keysB = Reflect.ownKeys(b)

    if (keysA.length !== keysB.length) return false
    return keysA.every(key => {
      if (!Reflect.has(b, key)) return false
      return deepEqual(a[key], b[key], hash)
    })
  }
}