class EventEmitter {
  constructor() {
    this.eventMap = new Map()
  }

  subscribe(eventName, callback) {
    let eventFns = []
    if (this.eventMap.has(eventName)) {
      eventFns = this.eventMap.get(eventName)
    }
    eventFns.push(callback)
    this.eventMap.set(eventName, eventFns)
    return {
      unsubscribe: () => {
        const eventFns = this.eventMap.get(eventName)
        if (!eventFns) {
          return
        }
        const fns = eventFns.filter(cb => cb !== callback)
        this.eventMap.set(eventName, fns)
      }
    }
  }

  emit(eventName, args = []) {
    const eventFns = this.eventMap.get(eventName)
    if (!eventFns) {
      return []
    }
    eventFns.forEach((fn) => {
      try {
        fn(...args);
      } catch (error) {
        console.error(`Error in event handler for ${eventName}:`, error);
      }
    })
  }
}