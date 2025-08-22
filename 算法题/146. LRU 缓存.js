class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }
    const value = this.cache.get(key)
    this.cache.delete(value)
    this.cache.set(key, value)
    return value
  }

  put(key, value) {
    if (!this.cache.has(key)) {
      if (this.cache.size === this.capacity) {
        const firstKey = this.cache.keys().next().value
        this.cache.delete(firstKey)
      }
    }
    this.cache.set(key, value)
    console.log(this.cache)
  }
}

const lc = new LRUCache(2)
console.log(lc.get(1))
lc.put(1, 1)
lc.put(2, 2)
lc.get(1)
lc.put(3, 3)
// console.log(lc.get(1))
lc.put(4, 4)
console.log(lc.get(3))
lc.get(4)