class EventEmit {
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    let fns = this.events[eventName] || []
    fns.push(callback)
    this.events[eventName] = fns
    return () => {
      this.off(eventName, callback)
    }
  }

  off(eventName, callback) {
    const fns = this.events[eventName]
    if (!fns || fns.length === 0) return
    this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
  }

  emit(eventName, ...args) {
    const fns = this.events[eventName]
    if (!fns) return
    fns.forEach(fn => {
      fn(...args)
    })
  }

  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}

// 测试代码
const bus = new EventEmit()

function handler1(msg) {
  console.log('handler1:', msg)
}
function handler2(msg) {
  console.log('handler2:', msg)
}

console.log('--- on & emit ---')
bus.on('test', handler1)
bus.on('test', handler2)
bus.emit('test', 'hello') // handler1: hello, handler2: hello

console.log('--- off ---')
bus.off('test', handler1)
bus.emit('test', 'world') // handler2: world

console.log('--- once ---')
bus.once('onceEvent', (msg) => {
  console.log('once:', msg)
})
bus.emit('onceEvent', 'first') // once: first
bus.emit('onceEvent', 'second') // 无输出