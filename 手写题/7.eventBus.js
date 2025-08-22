class EventBus {
  constructor() {
    this.events = new Map()
  }

  on(eventName, fn) {
    let eventFns = []
    if (this.events.has(eventName)) {
      eventFns = this.events.get(eventName)
    }
    eventFns.push(fn)
    this.events.set(eventName, eventFns)
  }

  off(eventName, fn) {
    if (!this.events.has(eventName)) {
      return
    }
    let eventFns = this.events.get(eventName)
    eventFns = eventFns.filter(cb => cb !== fn)
    this.events.set(eventFns)
  }

  emit(eventName, ...args) {
    if (!this.events.has(eventName)) {
      return
    }
    const eventFns = this.events.get(eventName)
    for (let fn of eventFns) {
      fn(...args)
    }
  }

  once(eventName, fn) {
    const onceWrapper = (...args) => {
      fn(...args)
      this.off(eventName, onceWrapper)
    }
    this.on(eventName, onceWrapper)
  }
}