class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1
    }
    const value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return value
  }

  put(key, value) {
    if (!this.map.has(key)) {
      if (this.map.size === this.capacity) {
        let firstKey = this.map.keys().next().value
        this.map.delete(firstKey)
      }
    }
    this.map.set(key, value)
    this.get(key)
  }
}

class LRUCache2 {
  constructor(capacity) {
    this.capacity = capacity
    this.cacheMap = new Map()
    this.head = new Node()
    this.head.next = this.head
    this.head.pre = this.head
  }

  add(node) {
    // 最后一个节点
    this.head.pre.next = node
    node.pre = this.head.pre
    this.head.pre = node
    node.next = this.head
  }

  del(node) {
    node.next.pre = node.pre
    node.pre.next = node.next
  }

  get(key) {
    if (!this.cacheMap.has(key)) {
      return -1
    }
    const node = this.cacheMap.get(key)
    this.del(node)
    this.add(node)
    return node.value
  }

  put(key, value) {
    if (this.cacheMap.has(key)) {
      const node = this.cacheMap.get(key)
      node.value = value
      this.get(key)
      return
    }
    if (this.cacheMap.size === this.capacity) { 
      const firstNode = this.head.next
      this.cacheMap.delete(firstNode.key)
      this.del(firstNode)
    }
    const node = new Node(key, value)
    this.add(node)
    this.cacheMap.set(key, node)
  }
}

class Node {
  constructor(key = 0, value = 0) {
    this.key = key
    this.value = value
    this.pre = null
    this.next = null
  }
}

