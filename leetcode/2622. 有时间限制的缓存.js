class TimeLimitedCache {
  constructor() {
    this.map = new Map()
  }

  set(key, value, duration) {
    const mapValue = {
      value,
      expire: Date.now() + duration
    }
    const result = this.isExpire(key)
    this.map.set(key, mapValue)
    return !result
  }

  get(key) {
    return !this.isExpire(key) ? this.map.get(key).value : -1
  }

  count() {
    let size = 0
    this.map.forEach((_, key) => {
      if (!this.isExpire(key)) {
        size++
      }
    })
    return size
  }

  isExpire(key) {
    if (!this.map.has(key)) {
      return true
    }
    const { expire } = this.map.get(key)
    if (Date.now() > expire) {
      this.map.delete(key)
      return true
    }
    return false
  }
}